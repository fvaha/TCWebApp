import { FaApple, FaWindows, FaLinux, FaRust } from "react-icons/fa6";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import { useLang } from "../components/LanguageContext";

const apps = [
  { label: "SDK", icon: <FaRust className="text-orange-500" size={50} /> },
  { label: "iOS", icon: <SiAppstore className="text-blue-500" size={50} /> },
  {
    label: "Android",
    icon: <SiGoogleplay className="text-green-600" size={50} />,
  },
  { label: "Windows", icon: <FaWindows className="text-blue-700" size={50} /> },
  { label: "macOS", icon: <FaApple className="text-neutral-700" size={50} /> },
  { label: "Linux", icon: <FaLinux className="text-yellow-500" size={50} /> },
];

export default function AppsSection() {
  const { t } = useLang();

  return (
    <section className="bg-white dark:bg-black full-bleed py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gold mb-12">
        {t.features.platforms}
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-5xl mx-auto text-center">
        {apps.map((app, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center space-y-2"
          >
            {app.icon}
            <span className="text-gold text-sm sm:text-base">{app.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
