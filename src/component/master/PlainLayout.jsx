import Social from "../regular/Social";
import Footer from "./Footer";
import MaiNavbar from "./MaiNavbar";

async function getData() {
    const category = (await (await fetch(`${process.env.HOST}/api/category`)).json())['data']
    let socials    = (await (await fetch(`${process.env.HOST}/api/social`)).json())['data']
    return{category:category , socials:socials}
}


 async function PlainLayout(props) { 
    const data = await getData() 
  return ( 
  < >
  <MaiNavbar category= {data.category}/>
  {props.children}
  <Social socials={data.socials} />
  <Footer />
  </> 
  )}
  export default PlainLayout;