import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Social = (props) => { 
  return (
 
      <section className="container mx-auto mb-14">
        <div className="text-center bg-[#f1f5f9] p-11 rounded-2xl mt-14">
          <h1 className="text-2xl font-extrabold mb-5">Social Media</h1>
          <div className="flex gap-5 justify-center ]">
          <a href={props.socials[0]['facebook']} target="_blank">
          <FaFacebookF className="text-2xl cursor-pointer hover:text-yellow-400"/> 
          </a>
          <a href={props.socials[0]['twitter']} target="_blank">
          <FaTwitter className="text-2xl cursor-pointer hover:text-yellow-400" />

          </a>
          <a href={props.socials[0]['linkedin']} target="_blank">
          <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-400"/>
          </a>
         
          </div>
        </div>
      </section>
 
  );
};

export default Social;
