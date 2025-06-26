import { StaticImageData } from "next/image";
import uploadFile from "@/public/assets/images/upload-file.svg";
import updateFile from "@/public/assets/images/update-file.svg";
import shareFile from "@/public/assets/images/share-file.svg";

type FeatureMockType = {
  title: string;
  imageSrc: StaticImageData;
  description: string;
};

export const featureMock: FeatureMockType[] = [
  {
    title: "Easy to upload",
    imageSrc: uploadFile,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquam numquam similique eaque nisi quos deleniti dolore animi enim placeat ",
  },
  {
    title: "Easy to update",
    imageSrc: updateFile,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquam numquam similique eaque nisi quos deleniti dolore animi enim placeat ",
  },
  {
    title: "Easy to share",
    imageSrc: shareFile,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquam numquam similique eaque nisi quos deleniti dolore animi enim placeat ",
  },
];
