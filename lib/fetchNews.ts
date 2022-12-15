import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) =>{

    // graphql query
    const query = gql`
      query MyQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
      )  {
        myQuery(
            # access_key: "a45d36504e7c4209e0d123a4b9687039"
            access_key: $access_key
            categories: $categories
            countries: "de,au,br,in,us,eg"
            sort:"published_desc"
            keywords: $keywords
        ) {
          data {
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
          }
          pagination {
            count
            limit
            offset
            total
          }
        }
      }
    `;
    // fetch function with Next.js 13 caching...

        const res = await fetch("https://public3f168c25bb5a2242.stepzen.net/api/manageable-gerbil/__graphql",{
            method: 'POST',
            cache: isDynamic ? "no-cache" : "default",
            next: isDynamic ? {revalidate: 0} : {revalidate: 20},
            headers:{
                "Content-Type": "application/json",
                Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
            },
            body: JSON.stringify({
                query, 
                variables:{
                    access_key: process.env.MEDIASTACK_API_KEY,
                    categories: category,
                    keywords: keywords,
                
                },
            }),
        }
    );

    console.log(
        "LOADING NEW DATA FROM API FOR CATEGORY >>>",
        category,
        keywords
    );

    const newsResponse = await res.json();
    // sort function by images vs not images present
    const news = sortNewsByImage(newsResponse.data.myQuery);
    // res res
    return news;
}
export default fetchNews;

// importing schema successfully...
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=a45d36504e7c4209e0d123a4b9687039"
//
