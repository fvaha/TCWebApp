export interface Slide {
  title: string;
  description: string;
  cta: string;
  link: string;
  background?: {
    type: 'photo' | 'video';
    src: string;
    alt?: string;
  };
  videoLink?: {
    src: string;
    poster?: string;
    alt?: string;
  };
}
