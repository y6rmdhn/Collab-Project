import { CiGlobe } from "react-icons/ci";
import { Accordion } from "./Accordion";

const Footer = () => {
  return (
    <footer className="py-32 mx-[24px]">
      <div className="flex flex-col gap-10 text-xl pb-20">
        <p>Featured</p>
        <p>Shoes</p>
        <p>Clothing</p>
        <p>Kids</p>
      </div>

      <Accordion
        contentBtn={"Resources"}
        contentOne={"Gift Cards"}
        contentTwo={"Find a Store"}
        contentThree={"Membership"}
        contentFour={"Nike Journal"}
        contentFive={"Site Feedback"}
      />

      <div>
        <div className="flex gap-1 my-8">
          <CiGlobe className="h-6 w-6" />
          <button>United States</button>
        </div>

        <div className="h-[2px] w-full rounded-full bg-gray-200"></div>

        <div className="flex flex-col gap-5 text-gray-500 mt-10">
          <p>© 2024 Nike, Inc. All Rights Reserved</p>
          <p>Terms of Sale</p>
          <p>Terms of Use</p>
          <p>Nike Privacy Policy</p>
          <p>CA Supply Chains Act</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
