export default function sortNewsByImage(news: NewsResponce){
    const newsWithImage = news.data.filter((item)=> item.image !== null);
    const newsWithoutImage = news.data.filter((item)=> item.image === null);

    const sortedNewsResponse = {
        pagination: news.pagination,
        data: [...newsWithImage, ...newsWithoutImage]
    }

    return sortedNewsResponse;
}