import type { Feature } from "../types/feature";
import {
  FaShieldAlt,
  FaRandom,
  FaUserSecret,
  FaServer,
  FaCoins,
  FaLock,
  FaFingerprint,
  FaUserCheck,
  FaCogs,
  FaEyeSlash,
  FaSyncAlt,
  FaLaptop,
  FaBookOpen,
} from "react-icons/fa";
import { GiAbstract023 as FaCheckShield } from "react-icons/gi";

export const features: Feature[] = [
  {
    title: "Сквозное шифрование",
    icon: FaShieldAlt,
    description:
      "Все данные шифруются до выхода с вашего устройства, обеспечивая полную конфиденциальность.",
    points: [
      "AES-256 + ECDSA + secp256k1",
      "Шифрование сообщений и платежей",
      "Недоступно третьим лицам",
    ],
  },
  {
    title: "Аппаратное хранение ключей",
    icon: FaFingerprint,
    description:
      "Приватные ключи хранятся в аппаратных модулях (Secure Enclave, StrongBox) и никогда не покидают устройство.",
    points: [
      "Поддержка iPhone, Android, TPM",
      "Отсутствие программной экстракции",
      "Биометрическая разблокировка",
    ],
  },
  {
    title: "Perfect Forward Secrecy",
    icon: FaSyncAlt,
    description:
      "Каждая сессия использует новые ключи, поэтому компрометация не раскрывает прошлые данные.",
    points: [
      "Автоматическая регенерация ключей",
      "Шифрование на уровне сессии",
      "Нет ретроактивного компромисса",
    ],
  },
  {
    title: "Обфускация ввода",
    icon: FaRandom,
    description:
      "Одинаковый ввод никогда не создаёт одинаковый шифротекст, что блокирует анализ трафика.",
    points: [
      "Случайность вывода",
      "Повышенная конфиденциальность",
      "Блокирует атаки на известном шифре",
    ],
  },
  {
    title: "Защита от побочных каналов",
    icon: FaLock,
    description:
      "Случайные задержки и алгоритмические защиты противостоят тайминговым и боковым атакам.",
    points: [
      "Устойчивость к тайминговым атакам",
      "Скрытые операции",
      "Аппаратная безопасность",
    ],
  },
  {
    title: "Независимый Rust SDK",
    icon: FaCogs,
    description:
      "Безопасный и эффективный крипто-SDK на Rust – быстрый, безопасный и доступен только вашему приложению.",
    points: [
      "Открытый, аудируемый код",
      "Сверхбыстрая криптография",
      "Нет доступа сервера к SDK",
    ],
  },
  {
    title: "Отсутствие доступа сервера к ключам",
    icon: FaServer,
    description:
      "Сервер никогда не хранит и не читает ваши приватные ключи или расшифрованные данные, даже при взломе.",
    points: [
      "Zero-knowledge-backend",
      "Нет депонирования ключей",
      "Истинная собственность пользователя",
    ],
  },
  {
    title: "Зашифрованные платежи",
    icon: FaCoins,
    description:
      "Цифровые платежи с аппаратной криптозащитой, квантоустойчивостью и без центральных посредников.",
    points: [
      "End-to-end шифрование транзакций",
      "Работает на всех платформах",
      "Нет утечек данных процессорам",
    ],
  },
  {
    title: "Анонимная регистрация",
    icon: FaUserSecret,
    description:
      "Регистрация по номеру телефона – без централизованного сбора личных данных.",
    points: [
      "Отсутствие центрального хранилища данных",
      "Конфиденциальный онбординг",
      "Опциональная проверка телефона",
    ],
  },
  {
    title: "Соответствие и стандарты",
    icon: FaUserCheck,
    description:
      "Полностью соответствует NIS 2, HIPAA, CMMC, DFARS, НАТО и другим требованиям.",
    points: [
      "Готовность к GDPR & HIPAA",
      "Совместимо с военными/НАТО",
      "Нет бэкдоров NIST/NSA",
    ],
  },
  {
    title: "Квантоустойчивая безопасность",
    icon: FaCheckShield,
    description:
      "Защита от классических и квантовых атак – безопасность будущего уже сегодня.",
    points: [
      "Поддержка пост-квантовых алгоритмов",
      "Кривая secp256k1",
      "Криптография уровня блокчейна",
    ],
  },
  {
    title: "Архитектура Zero-Trust",
    icon: FaEyeSlash,
    description:
      "Даже администраторы системы не могут получить доступ к данным или ключам пользователей – абсолютная конфиденциальность по замыслу.",
    points: [
      "Нет привилегированных серверных аккаунтов",
      "Полный контроль пользователя",
      "Политико-ориентированный доступ",
    ],
  },
  {
    title: "Быстрая и безопасная связь",
    icon: FaSyncAlt,
    description:
      "Сообщения и платежи доставляются мгновенно при надёжной защите на каждом уровне.",
    points: [
      "Быстрая, надёжная связь",
      "Шифрование в реальном времени",
      "Без ущерба для производительности",
    ],
  },
  {
    title: "Мультиплатформенная поддержка",
    icon: FaLaptop,
    description:
      "Доступно на iPhone, Android и настольных системах – единый опыт везде.",
    points: [
      "Кроссплатформенный SDK",
      "Единый UX",
      "Безопасность на уровне устройства",
    ],
  },
  {
    title: "Детализированное аудирование",
    icon: FaBookOpen,
    description:
      "Отслеживайте каждое действие для полной прозрачности и нормативного соответствия.",
    points: [
      "Неизменяемые журналы",
      "Готово к нормативам",
      "Полная трассируемость",
    ],
  },
];
