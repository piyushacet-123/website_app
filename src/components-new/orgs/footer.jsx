import { TiFolder } from "react-icons/ti";
import { FooterCardSection } from "../atoms/about";
import Logo from "../logo";

export const Footer = () => {
  return (
    <div className=" container mx-auto px-8 mt-20 ">
      <div className="md:flex justify-between">
        <div className="md:place-self-center">
          <Logo />
        </div>
        <div className="flex">
          <FooterCardSection color={"bg-gray-200"} icon={<TiFolder />} />
          <FooterCardSection color={"bg-gray-200"} icon={<TiFolder />} />
          <FooterCardSection color={"bg-gray-200"} icon={<TiFolder />} />
          <FooterCardSection color={"bg-gray-200"} icon={<TiFolder />} />
          <FooterCardSection color={"bg-gray-200"} icon={<TiFolder />} />
        </div>
      </div>
      <div className="mt-4 md:mt-12"></div>
      <div className=" md:mt-4">
        <div className="md:flex justify-between">
          <div className="md:flex">
            <div className="flex justify-between text-gray-500">
              <span>Privacy Policy</span>
              <span className="ml-3">Terms of services</span>
              <span className="ml-3">Contact</span>
            </div>
          </div>
          <div>
            <div className="mt-5 md:mt-0">
              <span className="text-gray-500">
                2022 Digital Ocean LIC All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
