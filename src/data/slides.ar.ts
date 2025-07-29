import type { Slide } from "../types/slide";

export const slides: Slide[] = [
  {
    title: "تشفير بمعيار ذهبي للجميع",
    description:
      "اتصالات آمنة. مقاومة للكمّ. خصوصية بلا ثقة. المفاتيح الخاصة لا تغادر جهازك.",
    cta: "شاهد الميزات",
    link: "#features",
    background: {
      type: 'photo',
      src: "/images/encryption-bg.jpg",
      alt: "خلفية أمان التشفير"
    },
    videoLink: {
      src: "https://www.youtube.com/watch?v=example1",
      poster: "/images/video-poster1.jpg",
      alt: "شاهد عرض التشفير"
    }
  },
  {
    title: "أمان عسكري بسيط",
    description:
      "حلول مشفرة من النهاية للنهاية للشركات والأفراد. يحظى بثقة خبراء الأمن حول العالم.",
    cta: "اعرف المزيد",
    link: "#about",
    background: {
      type: 'video',
      src: "/videos/security-demo.mp4",
      alt: "فيديو عرض الأمان"
    }
  },
  {
    title: "تقنية مقاومة للكمّ",
    description:
      "أمّن مستقبلك بخوارزميات مقاومة للكمّ. ابق متقدماً على التهديدات الناشئة.",
    cta: "ابدأ الآن",
    link: "#get-started",
    background: {
      type: 'photo',
      src: "/images/quantum-bg.jpg",
      alt: "خلفية تقنية الكمّ"
    },
    videoLink: {
      src: "https://www.youtube.com/watch?v=example2",
      poster: "/images/video-poster2.jpg",
      alt: "الأمان الكمّي موضح"
    }
  },
];
