import {StaticImageData} from "next/image";

export interface IAboutPeople {
    name: string;
    avatar: string | StaticImageData;
    position: string;
    description: string;
}