import Cart from "../small/Cart";

const NewsFeed = (props) => {
  console.log( props.allNews);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5 px-2">
      
     
      
       {props.allNews.slice(0, props.allNews.length).map((item,i)=><Cart title={item['title']} img1={item.img1} shortDes={item.short_des} key={i} />)}
  
    </div>
  );
};

export default NewsFeed;
