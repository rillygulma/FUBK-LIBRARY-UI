import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
  return (
    <Footer bgDark>
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="About Us"/>
            <Footer.LinkGroup col>
              <Footer.Link href="#">History</Footer.Link>
              <Footer.Link href="#">Mission & Vision</Footer.Link>
              <Footer.Link href="#">Branches</Footer.Link>
              <Footer.Link href="#">Our Staff</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Our Services"/>
            <Footer.LinkGroup col>
              <Footer.Link href="#">Goal & Strategic Planning</Footer.Link>
              <Footer.Link href="#">Help</Footer.Link>
              <Footer.Link href="#">Library Policies</Footer.Link>
              <Footer.Link href="#">Ask a Librian</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Contact Us" /> 
            <Footer.LinkGroup col>
               <h2 className='font-bold'>Mailing Address:</h2>
               <span>Federal University Birnin Kebbi
                Library,Along Kalgo-Bunza Road, PMB 1157, Birnin Kebbi, Nigeria.</span>
                <h3 className='font-bold'>Library Email:</h3>
                <span>library@fubk.edu.ng</span> 
            </Footer.LinkGroup> 
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Rilwanu idris™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter;
