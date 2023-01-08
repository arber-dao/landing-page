import React, { useEffect, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Link } from "gatsby";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Layout from "@/components/layout/layout";
import HeroTriangle from "@/components/common/heroTriangle";
import KlerosLg from "@/assets/images/klerosLg.png";
import KlerosSm from "@/assets/images/klerosSm.png";
import GivingFood from "@/assets/images/givingFood.png";
import Book from "@/assets/images/book2.png";

interface CardProps {
  hoverState?: boolean | null;
  imgLg?: string;
  imgSm?: string;
  title: string;
  paragraph: string;
  linkText: string;
  link?: string;
}

const CardContent: React.FC<CardProps> = ({
  hoverState,
  title,
  paragraph,
  linkText,
}) => {
  return (
    <div className="px-6 py-4 xs:px-4 xs:py-2 md:px-6 md:py-4 w-full h-full flex flex-col">
      <div className="font-bold text-2xl md:mb-2 dark:text-white text-center">
        {title}
      </div>
      <div className="flex flex-col justify-between flex-1">
        <p className="text-gray-700 text-sm lg:text-base dark:text-gray-400 mt-2 !leading-6 lg:!leading-7">
          {paragraph}
        </p>

        <div
          className={`${
            hoverState
              ? "text-gray-200 dark:text-gray-400"
              : "text-gray-300 dark:text-gray-500"
          } text-sm xs:text-base underline`}
        >
          <p className="inline-block">{linkText}</p>
          <p className="inline-block">
            <ArrowLongRightIcon className="h-4 w-4 ml-1" />
          </p>
        </div>
      </div>
    </div>
  );
};

const cardItems = [
  {
    imgLg: GivingFood,
    imgSm: GivingFood,
    title: "Learn More",
    paragraph:
      "Learn about our goal to provide a secure, transparent, and completely decentralized protocol, that connects donors to fundraisers around the globe!",
    linkText: "Learn More",
    link: "#",
  },
  {
    imgLg: Book,
    imgSm: Book,
    title: "Documentation",
    paragraph:
      "Learn how to use the protocol, see our whitepaper, how Arber works, and more!",
    linkText: "Documentation",
    link: "https://arber.gitbook.io/api-docs/",
  },
  {
    imgLg: KlerosLg,
    imgSm: KlerosSm,
    title: "Kleros",
    paragraph:
      "How we integrate Kleros to secure our DAO is explained in detail in the documentation. For more information on the Kleros protocol, and to learn how they resolve disputes, check them out!",
    linkText: "Check out Kleros",
    link: "https://kleros.io",
  },
];

const CardLg: React.FC<CardProps> = (props) => {
  const [hoverState, setHoverState] = useState(false);
  const { imgLg, title, paragraph, linkText, link } = props;

  return (
    <a
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      href={link}
      target="_blank"
    >
      <div className="max-w-[14rem] lg:max-w-xs rounded-xl overflow-hidden shadow-xl transition ease-in-out duration-300 hover:scale-105 hover:-translate-y-2">
        <div className="bg-white dark:bg-gray-800 w-full aspect-video relative overflow-hidden">
          <img
            className="absolute m-auto w-full aspect-video"
            src={imgLg}
            alt="Sunset in the mountains"
          />
        </div>
        <div
          className={`bg-white dark:bg-gray-800 h-80 lg:h-72 flex flex-col justify-center hover`}
        >
          <CardContent
            hoverState={hoverState}
            title={title}
            paragraph={paragraph}
            linkText={linkText}
            link={link}
          />
        </div>
      </div>
    </a>
  );
};

const CardSm: React.FC<CardProps> = (props) => {
  const [hoverState, setHoverState] = useState(false);
  const { imgSm, title, paragraph, linkText, link } = props;

  return (
    <a
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      href={link}
      target="_blank"
    >
      <div
        className="rounded-xl shadow-xl flex xs:h-60 sm:h-40 transition ease-in-out duration-300 hover:scale-105 hover:-translate-y-1"
        style={{ minHeight: "12rem" }}
      >
        <div
          className="bg-white dark:bg-gray-800 h-full hidden xs:block rounded-l-xl"
          style={{ aspectRatio: 3 / 4 }}
        >
          <img
            className="rounded-l-xl object-cover h-full"
            style={{ aspectRatio: 3 / 4 }}
            src={imgSm}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="a rounded-l-xl rounded-r-xl  flex flex-col justify-center bg-white dark:bg-gray-800">
          <CardContent
            hoverState={hoverState}
            title={title}
            paragraph={paragraph}
            linkText={linkText}
          />
        </div>
      </div>
    </a>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="min-h-screen relative container mx-auto">
        <HeroTriangle
          rotation={20}
          className={`absolute -left-52 sm:-left-72 lg:-left-96 4xl:-left-1/4 top-96 sm:top-56 md:top-36 lg:top-8 opacity-40`}
          style={{ width: "calc(35vw + 30vh)" }}
        />
        <HeroTriangle
          rotation={330}
          className={`absolute -right-36 sm:-right-56 lg:-right-96 4xl:-right-1/3 -top-36 sm:-top-52 lg:-top-72 4xl:-top-1/3 opacity-40`}
          style={{ width: "calc(35vw + 30vh)" }}
        />
        <HeroTriangle
          rotation={20}
          className={`absolute -bottom-28 lg:-bottom-44 2xl:-bottom-1/3 -right-16 sm:-right-36 lg:right-0 opacity-40`}
          style={{ width: "calc(35vw + 30vh)" }}
        />

        <div className="relative mb-28">
          <div className="w-full pt-24 xs:pt-32 sm:pt-48">
            <div className="relative ml-5 xs:mx-auto w-fit">
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white">
                Revolutionizing Donations.
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary ">
                By the people for the people.
              </p>
            </div>
            <div className="hidden md:block">
              {/* space-x-6 lg:space-x-10 */}
              <div className="flex justify-between mt-20 ">
                {cardItems.map((item, idx) => (
                  <CardLg
                    key={idx}
                    imgLg={item.imgLg}
                    title={item.title}
                    paragraph={item.paragraph}
                    linkText={item.linkText}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
            <div className="block md:hidden">
              <div className="flex flex-col justify-center space-y-6 mt-10">
                {cardItems.map((item, idx) => (
                  <CardSm
                    key={idx}
                    imgSm={item.imgSm}
                    title={item.title}
                    paragraph={item.paragraph}
                    linkText={item.linkText}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen">
        <div className="h-full bg-white dark:bg-gray-800 z-30 relative">
          <div className="h-full bg-gradient-to-r from-primary to-secondary opacity-30 z-20 "></div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
