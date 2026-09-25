import type { Locale } from '@/lib/i18n/config';

export interface PolicySection {
  heading: string;
  paragraphs: string[];
}

export interface PrivacyPolicy {
  title: string;
  updated: string;
  intro: string;
  sections: PolicySection[];
  note: string;
}

/**
 * Политика конфиденциальности (152-ФЗ). Демонстрационный шаблон-заготовка:
 * ООО «АРКОН», реквизиты и контакты — вымышленные плейсхолдеры для витрины.
 * Перед реальным запуском реквизиты и текст финализируются с юристом заказчика.
 */
const ru: PrivacyPolicy = {
  title: 'Политика конфиденциальности',
  updated: 'Дата последнего обновления: —',
  intro:
    'Настоящая Политика определяет порядок обработки и защиты персональных данных оператором — ООО «АРКОН» (ИНН 1231231231, КПП 321213123) — в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».',
  sections: [
    {
      heading: '1. Общие положения',
      paragraphs: [
        'Политика применяется ко всей информации, которую оператор может получить о посетителях сайта. Использование сайта означает согласие с настоящей Политикой и условиями обработки персональных данных.',
        'Оператор обрабатывает персональные данные на законной и справедливой основе, только в объёме, необходимом для заявленных целей.',
      ],
    },
    {
      heading: '2. Какие данные обрабатываются',
      paragraphs: [
        'Через формы обратной связи оператор может получать: имя, наименование компании, телефон, адрес электронной почты и текст обращения.',
        'Автоматически могут собираться технические данные (cookie, IP-адрес, данные о браузере) для корректной работы сайта и статистики.',
      ],
    },
    {
      heading: '3. Цели обработки',
      paragraphs: [
        'Обработка персональных данных осуществляется в целях: обработки заявок и обращений, коммуникации с заявителем, подготовки коммерческих предложений и исполнения договорных обязательств.',
      ],
    },
    {
      heading: '4. Правовые основания',
      paragraphs: [
        'Согласие субъекта персональных данных, а также иные основания, предусмотренные 152-ФЗ и действующим законодательством РФ.',
      ],
    },
    {
      heading: '5. Хранение и защита',
      paragraphs: [
        'Персональные данные хранятся на серверах, расположенных на территории Российской Федерации, не дольше, чем этого требуют цели обработки или закон.',
        'Оператор принимает необходимые правовые, организационные и технические меры для защиты данных от неправомерного доступа, изменения, раскрытия или уничтожения.',
      ],
    },
    {
      heading: '6. Передача третьим лицам',
      paragraphs: [
        'Оператор не передаёт персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством, либо с согласия субъекта персональных данных.',
      ],
    },
    {
      heading: '7. Права субъекта персональных данных',
      paragraphs: [
        'Субъект вправе получать информацию об обработке своих данных, требовать их уточнения, блокирования или уничтожения, а также отозвать согласие на обработку, направив запрос оператору.',
      ],
    },
    {
      heading: '8. Cookie',
      paragraphs: [
        'Сайт может использовать cookie для корректной работы и аналитики. Пользователь может отключить cookie в настройках браузера; часть функций сайта при этом может работать некорректно.',
      ],
    },
    {
      heading: '9. Контакты оператора',
      paragraphs: [
        'ООО «АРКОН», ИНН 1231231231, КПП 321213123. Адрес и контактный e-mail для запросов по обработке персональных данных — уточняются.',
      ],
    },
  ],
  note: 'Демонстрационная версия документа. Финальный текст, реквизиты и контактные данные согласовываются с заказчиком и его юристом перед запуском.',
};

const en: PrivacyPolicy = {
  title: 'Privacy Policy',
  updated: 'Last updated: —',
  intro:
    'This Policy sets out how personal data is processed and protected by the operator — ARCON LLC (INN 1231231231, KPP 321213123) — in accordance with Russian Federal Law No. 152-FZ “On Personal Data”.',
  sections: [
    {
      heading: '1. General',
      paragraphs: [
        'This Policy applies to all information the operator may obtain about visitors of the website. Using the website constitutes consent to this Policy and to the processing of personal data.',
        'The operator processes personal data lawfully and fairly, only to the extent necessary for the stated purposes.',
      ],
    },
    {
      heading: '2. Data processed',
      paragraphs: [
        'Via contact forms the operator may receive: name, company name, phone, e-mail address and the text of the enquiry.',
        'Technical data (cookies, IP address, browser data) may be collected automatically for the correct operation of the website and statistics.',
      ],
    },
    {
      heading: '3. Purposes of processing',
      paragraphs: [
        'Personal data is processed for: handling enquiries, communicating with the applicant, preparing commercial proposals and performing contractual obligations.',
      ],
    },
    {
      heading: '4. Legal basis',
      paragraphs: [
        'Consent of the data subject, as well as other grounds provided for by 152-FZ and applicable Russian law.',
      ],
    },
    {
      heading: '5. Storage and protection',
      paragraphs: [
        'Personal data is stored on servers located in the Russian Federation, no longer than required by the purposes of processing or by law.',
        'The operator takes the necessary legal, organisational and technical measures to protect data against unlawful access, alteration, disclosure or destruction.',
      ],
    },
    {
      heading: '6. Transfer to third parties',
      paragraphs: [
        'The operator does not transfer personal data to third parties, except as provided by law or with the consent of the data subject.',
      ],
    },
    {
      heading: '7. Rights of the data subject',
      paragraphs: [
        'The data subject may obtain information about the processing of their data, request its clarification, blocking or deletion, and withdraw consent by contacting the operator.',
      ],
    },
    {
      heading: '8. Cookies',
      paragraphs: [
        'The website may use cookies for correct operation and analytics. Users can disable cookies in their browser settings; some website functions may then work incorrectly.',
      ],
    },
    {
      heading: '9. Operator contacts',
      paragraphs: [
        'ARCON LLC, INN 1231231231, KPP 321213123. The address and contact e-mail for personal-data requests are to be confirmed.',
      ],
    },
  ],
  note: 'Demonstration version of the document. The final text, company details and contacts are agreed with the client and their lawyer before launch.',
};

export function getPrivacyPolicy(locale: Locale): PrivacyPolicy {
  return locale === 'en' ? en : ru;
}
