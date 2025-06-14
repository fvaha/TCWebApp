import { type FC } from "react";

export type Feature = {
  title: string;
  icon: FC<{ className?: string }>;
  description: string;
  points: string[];
  image?: string;
  imageDark?: string;
};
