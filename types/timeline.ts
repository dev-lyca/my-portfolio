import { ComponentType, SVGProps } from "react";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>; 
  images: string[];
}
