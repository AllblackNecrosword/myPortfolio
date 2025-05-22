// import React from "react";
// import { cn } from "@/lib/utils";
// import { Marquee } from "../magicui/marquee";
// import { ThumbsUp } from "lucide-react";

// const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
//   },
//   {
//     name: "Jane",
//     username: "@jane",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://w7.pngwing.com/pngs/788/651/png-transparent-code-development-logo-nodejs-logos-icon-thumbnail.png",
//   },
//   {
//     name: "Jenny",
//     username: "@jenny",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://global.discourse-cdn.com/auth0/optimized/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9_2_1024x919.png",
//   },
//   {
//     name: "James",
//     username: "@james",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVIL5HpOsOFQWomhpmB5b8lTVQ9rIVnV9fg&s",
//   },
//   {
//     name: "James",
//     username: "@apple",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/1200px-Jira_Logo.svg.png",
//   },
// ];

// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

// const ReviewCard = ({ img, name, username, body }) => {
//   return (
//     <figure
//       className={cn(
//         "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl p-4",
//         "border-gray-950/[.1] bg-gray-950/[.01] ",
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img
//           className="rounded-full object-cover w-1/5 lg:w-1/2"
//           alt=""
//           src={img}
//         />
//       </div>
//     </figure>
//   );
// };
// const Tech = () => {
//   return (
//     <div className="mt-24 ">
//       <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black/40 backdrop-blur-2xl border-white/20">
//         <div className="mb-8 text-center flex flex-col justify-center items-center space-y-4 absolute z-10">
//           <ThumbsUp />
//           <h1 className="text-2xl font-bold lg:text-4xl ">Tech Stack</h1>
//           <p className="text-gray-300 dark:text-gray-300 lg:text-xl">
//             We use the best tech stack on the market.
//           </p>
//         </div>
//         <Marquee pauseOnHover className="[--duration:20s]">
//           {firstRow.map((review) => (
//             <ReviewCard key={review.username} {...review} />
//           ))}
//         </Marquee>
//         <Marquee reverse pauseOnHover className="[--duration:20s]">
//           {secondRow.map((review) => (
//             <ReviewCard key={review.username} {...review} />
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// };

// export default Tech;
import { Marquee } from "../magicui/marquee";
import { ThumbsUp } from "lucide-react";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://w7.pngwing.com/pngs/788/651/png-transparent-code-development-logo-nodejs-logos-icon-thumbnail.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://global.discourse-cdn.com/auth0/optimized/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9_2_1024x919.png",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVIL5HpOsOFQWomhpmB5b8lTVQ9rIVnV9fg&s",
  },
  {
    name: "James",
    username: "@apple",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jira_Logo.svg/1200px-Jira_Logo.svg.png",
  },
];

const ReviewCard = ({ img }) => (
  <div className="h-full w-52 cursor-pointer overflow-hidden rounded-xl p-4">
    <div className="flex items-center justify-center h-full">
      <img src={img} alt="Tech logo" className="object-contain w-20 h-20" />
    </div>
  </div>
);

const Tech = () => {
  return (
    <div className="mt-24">
      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black/20 backdrop-blur-2xl border border-white/20 rounded-lg py-12">
        <div className="mb-8 text-center z-10">
          <h1 className="text-2xl font-bold lg:text-4xl text-white">
            Tech Stack
          </h1>
          <p className="text-gray-300 lg:text-xl mt-4">
            We use the best tech stack on the market.
          </p>
        </div>
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Tech;
