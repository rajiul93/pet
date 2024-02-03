async function getData() {
  const category = (await (await fetch(`${process.env.HOST}/api/category`)).json())['data'];
  let socials    = (await (await fetch(`${process.env.HOST}/api/social`)).json())['data'];
  let allNews    = (await (await fetch(`${process.env.HOST}/api/post/all-news`)).json())['data'];
  return{category:category , socials:socials,allNews:allNews}
}

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "../material-tailwind/material-tailwind";
const Cart = async(props) => {
  
  const data = await getData()
    return (
        <Card className="mt-6  ">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={props.img1}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <h1 variant="h5" color="blue-gray" className="mb-2">
            {props.title}
          </h1>
          <p> {props.shortDes}</p>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    );
};

export default Cart;