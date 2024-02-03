import NewsDetails from '@/component/master/NewsDetails';
import PlainLayout from '@/component/master/PlainLayout';
import Category from '@/component/regular/Category';
import LatestContent from '@/component/regular/LatestContent';

const Page = () => {
    return (
       <PlainLayout>
         <div className="container grid grid-cols-1 md:grid-cols-4 gap-3 py-2 mx-auto">
            <div className="col-span-1 md:col-span-3 border-spacing-1  ">
            <NewsDetails />
      
          </div>
          <div className="col-span-1 border-spacing-1  ">
          <LatestContent />
            <Category />
          </div>
        </div>
       </PlainLayout>
    );
};

export default Page;