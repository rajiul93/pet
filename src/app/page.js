async function getData() {
  const category = (await (await fetch(`${process.env.HOST}/api/category`)).json())['data'];
  let socials    = (await (await fetch(`${process.env.HOST}/api/social`)).json())['data'];
  let allNews    = (await (await fetch(`${process.env.HOST}/api/post/all-news`)).json())['data'];
  return{category:category , socials:socials,allNews:allNews}
}

import PlainLayout from "@/component/master/PlainLayout";
import Blog from "@/component/regular/Blog";
import Category from "@/component/regular/Category";
import LatestContent from "@/component/regular/LatestContent";
import NewsFeed from "@/component/regular/NewsFeed";
import Slide from "../component/small/Slide";

export default async function Home () {

const data = await getData()
// console.log(data.allNews);
  return (
    <>
      <PlainLayout> 
        <div className="bg-blue-gray-50">

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 pt-2 pb-14  ">
          
          <div className="col-span-1 md:col-span-3 border-spacing-1  ">
           <Slide/>
            <NewsFeed allNews={data.allNews} />
            <Blog/>
          </div>
          <div className="col-span-1 border-spacing-1  ">
            <LatestContent category={data.category} />
            <Category category={data.category}/>
          </div>
        </div>
        </div>
         </PlainLayout>
    </>
  );
}
