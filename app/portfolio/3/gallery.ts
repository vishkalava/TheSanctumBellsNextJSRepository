// LightBox Images
import img01 from "@/assets/images/portfolio/3/img-01.jpg";
import img02 from "@/assets/images/portfolio/3/img-02.jpg";
import img03 from "@/assets/images/portfolio/3/img-03.jpg";
import img04 from "@/assets/images/portfolio/3/img-04.jpg";
import img05 from "@/assets/images/portfolio/3/img-05.jpg";
import img06 from "@/assets/images/portfolio/3/img-06.jpg";

// Gallery Images
import img01Small from "@/assets/images/portfolio/3/img-01-564x400.jpg";
import img02Small from "@/assets/images/portfolio/3/img-02-287x400.jpg";
import img03Small from "@/assets/images/portfolio/3/img-03-436x400.jpg";
import img04Small from "@/assets/images/portfolio/3/img-04-287x400.jpg";
import img05Small from "@/assets/images/portfolio/3/img-05-476x400.jpg";
import img06Small from "@/assets/images/portfolio/3/img-06-564x400.jpg";
// ---

type PhotoType = {
  src: string;
  width: number;
  height: number;
  title?: string;
  description?: string;
};

// The images that you will be previewed in Lightbox
const lightBoxPhotos: PhotoType[] = [
  {
    src: img01.src, // image src url
    width: 585, // image width
    height: 415, // image height
    title: "Wooden Club Desk", // Title of the image when showning (optional)
    description: "This is the image description", // description of the image when showning (optional)
  },
  {
    src: img02.src,
    width: 505,
    height: 705,
    title: "Smart Watch Interface",
    description: "This is the image description",
  },
  {
    src: img03.src,
    width: 720,
    height: 660,
    title: "Office Chair Goes Viral",
    description: "This is the image description",
  },
  {
    src: img04.src,
    width: 505,
    height: 705,
    title: "Neo City Lights Shine",
    description: "This is the image description",
  },
  {
    src: img05.src,
    width: 720,
    height: 605,
    title: "Arch of Skyscrapers",
    description: "This is the image description",
  },
  {
    src: img06.src,
    width: 585,
    height: 415,
    title: "Use of Wood in Architecture",
    description: "This is the image description",
  },
];

// The images that you will be previewed as gallery in the wep page
export const galleryPhotos: PhotoType[] = [
  {
    src: img01Small.src, // image src url
    width: 564, // image width
    height: 400, // image height
    title: "Wooden Club Desk", // Title of the image when showning (optional)
    description: "This is the image description", // description of the image when showning (optional)
  },
  {
    src: img02Small.src,
    width: 287,
    height: 400,
    title: "Smart Watch Interface",
    description: "This is the image description",
  },
  {
    src: img03Small.src,
    width: 436,
    height: 400,
    title: "Office Chair Goes Viral",
    description: "This is the image description",
  },
  {
    src: img04Small.src,
    width: 287,
    height: 400,
    title: "Neo City Lights Shine",
    description: "This is the image description",
  },
  {
    src: img05Small.src,
    width: 476,
    height: 400,
    title: "Arch of Skyscrapers",
    description: "This is the image description",
  },
  {
    src: img06Small.src,
    width: 564,
    height: 400,
    title: "Use of Wood in Architecture",
    description: "This is the image description",
  },
];

export const lightBoxImages = lightBoxPhotos.map((photo: PhotoType) => {
  return {
    src: photo.src,
    width: photo.width,
    height: photo.height,
    title: photo.title,
    description: photo.description,
    // srcSet: breakpoints.map((breakpoint) => {
    //   return {
    //     src: photo.src,
    //     width,
    //     height,
    //   };
    // }),
  };
});
