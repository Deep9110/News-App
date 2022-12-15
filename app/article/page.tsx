import {notFound} from 'next/navigation';


type Props = {
    searchParams?: Article;
};

function ArticlePage({searchParams}: Props){
    if(
        (searchParams && Object.entries(searchParams).length === 0) || !searchParams){
            return notFound();
        }
    
    const article: Article = searchParams;
    
    return(
        <article>
            <section>
                {article.image && (
                    <img
                    className="object-cover max-w-md mx-auto rounded-lg shadow-md md:max-w-lg lg:max-w-xl h-52"
                    src={article.image}
                    alt={article.title}
                    />
                )}
                <div className="px-10">
                    <h1 className='px-0 pb-2 no-underline headerTitle'>
                        {article.title}
                        hii i am deep
                    </h1>
                </div>
            </section>
        </article>
    );
}

export default ArticlePage
// import { notFound } from "next/navigation";


// type Props = {
//     searchParams?: Article;
// };

// function ArticlePage({searchParams}: Props){
//     if(
//         (searchParams && Object.entries(searchParams).length === 0) ||
//          !searchParams

//     ){
//         return notFound();
//     }
//     const article: Article = searchParams;
    
//     return(
//         <article>
//             <section>
//                 {article.image && (
//                     <img
//                     className="object-cover max-w-md mx-auto rounded-lg shadow-md md:max-w-lg lg:max-w-xl h-52"
//                     src={article.image}
//                     alt={article.title}
//                     />
//                 )}
//                 <div>
                    
//                 </div>
//             </section>
//         </article>
//     ) 
    
//     // (<article>
//     //     <section>
//     //         {article.image && (
//     //             <img
//     //              className="object-cover max-w-md mx-auto rounded-lg shadow-md md:max-w-lg h-50 lg:max-w-xl"
//     //              src={article.image}
//     //              alt={article.title}
//     //              />
//     //         )}
//     //     </section>
//     // </article>
//     // );
// }
// export default ArticlePage;