async function getData() {
  const category = (await (await fetch(`${process.env.HOST}/api/category`)).json())['data'];
  let cat    = (await (await fetch(`${process.env.HOST}/api/post/category?id=2`)).json())['data'];
  
  let allNews    = (await (await fetch(`${process.env.HOST}/api/post/all-news`)).json())['data'];
  return{category:category , cat:cat,allNews:allNews}
}

import PlainLayout from "@/component/master/PlainLayout";
import Category from "@/component/regular/Category";
import LatestContent from "@/component/regular/LatestContent";
import NewsFeed from "@/component/regular/NewsFeed";

const Page = async() => {
  const data =await getData()
    return (
       <PlainLayout >
         <div className="container grid grid-cols-1 md:grid-cols-4 gap-3 py-2 mx-auto">
          
          <div className="col-span-1 md:col-span-3 border-spacing-1  ">
              
          <NewsFeed allNews={data.cat} />
        <h1>CAT</h1>
          </div>
          <div className="col-span-1 border-spacing-1  ">
            <LatestContent  category={data.category}/>
            <Category category={data.category} />
          </div>
        </div> 
       </PlainLayout>
    );
};

export default Page;