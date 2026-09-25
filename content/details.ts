import type { Locale } from '@/lib/i18n/config';
import type { ServiceDetail, ProjectDetail, NewsDetail } from '@/types';

const P = '/media/photos';

/**
 * Расширенный контент для внутренних страниц (услуги, проекты, новости).
 * Данные отделены от презентации. ВРЕМЕННЫЕ плейсхолдеры (см. decisions D7).
 */

// ---------- УСЛУГИ ----------
const servicesRu: Record<string, ServiceDetail> = {
  design: {
    slug: 'design',
    lead: 'Инженерные изыскания и проектная документация для объектов любой сложности — с ответственностью за проходимость экспертизы и реализуемость на площадке.',
    overview: [
      'Проектирование в АРКОН ведёт штатный проектный офис. Мы отвечаем не только за комплект документации, но и за то, что заложенные решения технологичны, проходят экспертизу и корректно переносятся на строительную площадку.',
      'Сквозная связь проектировщиков и производственников снимает классический разрыв «проект отдельно, стройка отдельно»: авторы решений сопровождают объект вплоть до ввода в эксплуатацию.',
    ],
    deliverables: [
      { title: 'Инженерные изыскания', description: 'Геодезические, геологические, гидрометеорологические и экологические изыскания под проект.' },
      { title: 'Проектная документация', description: 'Разделы ПД в соответствии с ПП РФ №87, подготовка к прохождению экспертизы.' },
      { title: 'Рабочая документация', description: 'РД для строительно-монтажных работ, спецификации, ведомости объёмов.' },
      { title: 'BIM-моделирование', description: 'Единая цифровая модель, сбор коллизий, увязка инженерных систем.' },
    ],
    process: [
      { no: '01', title: 'Исходные данные', description: 'Сбор ТЗ, изысканий и ограничений площадки.' },
      { no: '02', title: 'Проектные решения', description: 'Вариантная проработка, выбор оптимального решения.' },
      { no: '03', title: 'Экспертиза', description: 'Подготовка комплекта и сопровождение прохождения экспертизы.' },
      { no: '04', title: 'Авторский надзор', description: 'Сопровождение решений на этапе строительства.' },
    ],
  },
  construction: {
    slug: 'construction',
    lead: 'Генеральный подряд и строительно-монтажные работы силами собственных подразделений — включая инженерные сети, гидротехнику и подводные работы.',
    overview: [
      'АРКОН выполняет функции генподрядчика и ведёт строительно-монтажные работы собственными силами: бригады, техника и специальное оборудование находятся в управлении компании, а не привлекаются от случая к случаю.',
      'Это даёт контроль качества и сроков на площадке и позволяет браться за технически сложные объекты — от прокладки магистральных сетей до гидротехнических и подводных работ.',
    ],
    deliverables: [
      { title: 'Генподряд и СМР', description: 'Организация и выполнение полного цикла строительно-монтажных работ.' },
      { title: 'Инженерные сети', description: 'Водоснабжение, водоотведение, газ, тепло, электрические сети.' },
      { title: 'Гидротехнические работы', description: 'Причальные сооружения, берегоукрепление, дноуглубление.' },
      { title: 'Подводные и водолазные работы', description: 'Обследование, монтаж и ремонт подводных конструкций.' },
    ],
    process: [
      { no: '01', title: 'ППР и мобилизация', description: 'Проект производства работ, вывод техники и бригад на объект.' },
      { no: '02', title: 'Производство работ', description: 'СМР по графику с операционным контролем качества.' },
      { no: '03', title: 'Контроль качества', description: 'Входной и операционный контроль, исполнительная документация.' },
      { no: '04', title: 'Сдача объекта', description: 'Пусконаладка, приёмо-сдаточные испытания, ввод в эксплуатацию.' },
    ],
  },
  reconstruction: {
    slug: 'reconstruction',
    lead: 'Модернизация и восстановление действующих объектов и сетей — в том числе без остановки эксплуатации.',
    overview: [
      'Реконструкция требует точной диагностики и решений, учитывающих фактическое состояние конструкций. Мы обследуем объект, проектируем усиление или замену и выполняем работы с минимальным влиянием на эксплуатацию.',
      'Опыт полного цикла позволяет вести реконструкцию комплексно: от обследования и проекта до монтажа и сдачи, без передачи объекта между разными подрядчиками.',
    ],
    deliverables: [
      { title: 'Обследование и диагностика', description: 'Оценка фактического состояния конструкций и сетей.' },
      { title: 'Усиление конструкций', description: 'Проектные и монтажные решения по усилению несущих элементов.' },
      { title: 'Замена оборудования', description: 'Демонтаж и монтаж инженерного оборудования и участков сетей.' },
      { title: 'Восстановление объектов', description: 'Восстановление эксплуатационных характеристик объекта.' },
    ],
    process: [
      { no: '01', title: 'Обследование', description: 'Диагностика и обмеры действующего объекта.' },
      { no: '02', title: 'Проект реконструкции', description: 'Решения по усилению, замене и этапности работ.' },
      { no: '03', title: 'Производство работ', description: 'Реконструкция, при необходимости — без остановки эксплуатации.' },
      { no: '04', title: 'Ввод', description: 'Испытания и возврат объекта в эксплуатацию.' },
    ],
  },
  supervision: {
    slug: 'supervision',
    lead: 'Инженерное сопровождение: строительный контроль, авторский надзор и функции заказчика-застройщика на всём протяжении реализации.',
    overview: [
      'Инженерное сопровождение делает процесс прозрачным для заказчика и инвестора: независимый контроль качества, сроков и бюджета снижает риски и защищает вложения.',
      'Мы принимаем на себя функции заказчика-застройщика и технического контроля, обеспечивая единую точку ответственности за объект.',
    ],
    deliverables: [
      { title: 'Строительный контроль', description: 'Контроль качества, объёмов и соответствия проекту.' },
      { title: 'Авторский надзор', description: 'Надзор за реализацией проектных решений.' },
      { title: 'Заказчик-застройщик', description: 'Организация и управление реализацией объекта.' },
      { title: 'Геодезия и мониторинг', description: 'Геодезическое сопровождение и мониторинг деформаций.' },
    ],
    process: [
      { no: '01', title: 'Планирование', description: 'График, бюджет, регламенты контроля.' },
      { no: '02', title: 'Контроль на площадке', description: 'Инспекции, проверки, фиксация отклонений.' },
      { no: '03', title: 'Отчётность', description: 'Регулярная прозрачная отчётность заказчику.' },
      { no: '04', title: 'Приёмка', description: 'Приёмка работ и сопровождение ввода в эксплуатацию.' },
    ],
  },
};

const servicesEn: Record<string, ServiceDetail> = {
  design: {
    slug: 'design',
    lead: 'Engineering surveys and design documentation for facilities of any complexity — with accountability for expert review and buildability on site.',
    overview: [
      'Design at ARCON is led by an in-house design office. We are responsible not only for the documentation package, but for solutions that are buildable, pass expert review and transfer correctly to the construction site.',
      'A direct link between designers and site teams removes the classic gap between “design” and “construction”: the authors of the solutions support the facility through to commissioning.',
    ],
    deliverables: [
      { title: 'Engineering surveys', description: 'Geodetic, geological, hydrometeorological and environmental surveys for the project.' },
      { title: 'Design documentation', description: 'Design stage sections and preparation for expert review.' },
      { title: 'Working documentation', description: 'Working drawings for construction, specifications, bills of quantities.' },
      { title: 'BIM modelling', description: 'A single digital model, clash detection, coordination of engineering systems.' },
    ],
    process: [
      { no: '01', title: 'Input data', description: 'Brief, surveys and site constraints.' },
      { no: '02', title: 'Design solutions', description: 'Option studies and selection of the optimal solution.' },
      { no: '03', title: 'Expert review', description: 'Package preparation and support through expert review.' },
      { no: '04', title: 'Designer supervision', description: 'Support of the solutions during construction.' },
    ],
  },
  construction: {
    slug: 'construction',
    lead: 'General contracting and civil works with in-house units — including utility networks, hydraulic and underwater works.',
    overview: [
      'ARCON acts as general contractor and performs civil works with its own resources: crews, equipment and special machinery are managed in-house rather than hired ad hoc.',
      'This gives control over quality and schedule on site and allows us to take on technically complex facilities — from trunk networks to hydraulic and underwater works.',
    ],
    deliverables: [
      { title: 'General contracting & civil works', description: 'Organising and performing the full cycle of construction works.' },
      { title: 'Utility networks', description: 'Water supply, drainage, gas, heating and electrical networks.' },
      { title: 'Hydraulic works', description: 'Berth structures, bank protection, dredging.' },
      { title: 'Underwater & diving works', description: 'Inspection, installation and repair of underwater structures.' },
    ],
    process: [
      { no: '01', title: 'Works plan & mobilisation', description: 'Works execution plan, deployment of equipment and crews.' },
      { no: '02', title: 'Works execution', description: 'Civil works on schedule with in-process quality control.' },
      { no: '03', title: 'Quality control', description: 'Incoming and in-process control, as-built documentation.' },
      { no: '04', title: 'Handover', description: 'Commissioning, acceptance tests, putting into operation.' },
    ],
  },
  reconstruction: {
    slug: 'reconstruction',
    lead: 'Modernisation and restoration of operating facilities and networks — including without halting operation.',
    overview: [
      'Reconstruction requires accurate diagnostics and solutions that account for the actual condition of structures. We survey the facility, design reinforcement or replacement and carry out works with minimal impact on operation.',
      'Full-cycle experience lets us deliver reconstruction end-to-end: from survey and design to installation and handover, without passing the facility between different contractors.',
    ],
    deliverables: [
      { title: 'Survey & diagnostics', description: 'Assessment of the actual condition of structures and networks.' },
      { title: 'Structural reinforcement', description: 'Design and installation solutions for reinforcing load-bearing elements.' },
      { title: 'Equipment replacement', description: 'Removal and installation of engineering equipment and network sections.' },
      { title: 'Facility restoration', description: 'Restoring the operational characteristics of the facility.' },
    ],
    process: [
      { no: '01', title: 'Survey', description: 'Diagnostics and measurements of the operating facility.' },
      { no: '02', title: 'Reconstruction design', description: 'Reinforcement, replacement and phasing solutions.' },
      { no: '03', title: 'Works execution', description: 'Reconstruction, where required — without halting operation.' },
      { no: '04', title: 'Commissioning', description: 'Testing and returning the facility to operation.' },
    ],
  },
  supervision: {
    slug: 'supervision',
    lead: 'Engineering supervision: construction control, designer supervision and client-developer functions throughout delivery.',
    overview: [
      'Engineering supervision makes the process transparent for the client and investor: independent control of quality, schedule and budget reduces risk and protects the investment.',
      'We take on client-developer and technical control functions, providing a single point of accountability for the facility.',
    ],
    deliverables: [
      { title: 'Construction control', description: 'Control of quality, volumes and compliance with the design.' },
      { title: 'Designer supervision', description: 'Supervision of the implementation of design solutions.' },
      { title: 'Client-developer', description: 'Organising and managing facility delivery.' },
      { title: 'Surveying & monitoring', description: 'Geodetic support and deformation monitoring.' },
    ],
    process: [
      { no: '01', title: 'Planning', description: 'Schedule, budget, control procedures.' },
      { no: '02', title: 'On-site control', description: 'Inspections, checks, recording of deviations.' },
      { no: '03', title: 'Reporting', description: 'Regular transparent reporting to the client.' },
      { no: '04', title: 'Acceptance', description: 'Acceptance of works and support of commissioning.' },
    ],
  },
};

// ---------- ПРОЕКТЫ ----------
const projectsRu: Record<string, ProjectDetail> = {
  'port-hydro': {
    slug: 'port-hydro',
    lead: 'Реконструкция причального комплекса с дноуглублением и восстановлением несущих конструкций причальной стенки.',
    overview: [
      'Объект требовал восстановления эксплуатационных характеристик причала при сохранении режима работы порта. Работы велись поэтапно, с учётом навигации и погодных окон.',
      'АРКОН выполнил полный цикл: обследование, проектные решения, дноуглубительные и строительно-монтажные работы, включая подводную часть.',
    ],
    task: 'Восстановить несущую способность причальной стенки и обеспечить проектные глубины у причала без остановки работы порта.',
    result: [
      'Причал возвращён в эксплуатацию с проектными характеристиками, обеспечены безопасные глубины у стенки.',
      'Ключевой этап сдан с опережением графика.',
    ],
    gallery: [`${P}/project-1.jpg`, `${P}/sector-port.jpg`, `${P}/sector-hydro.jpg`],
  },
  'water-networks': {
    slug: 'water-networks',
    lead: 'Строительство магистральных сетей водоснабжения большого диаметра с подключением к действующей системе.',
    overview: [
      'Проект включал прокладку магистральных трубопроводов и увязку с существующей сетью без длительных перерывов водоснабжения.',
      'Собственные бригады и техника позволили выдержать сжатый график в условиях действующей инфраструктуры.',
    ],
    task: 'Проложить магистральные сети водоснабжения и подключить их к действующей системе с минимальным влиянием на потребителей.',
    result: [
      'Введены в эксплуатацию магистральные сети, повышена надёжность водоснабжения района.',
      'Работы выполнены в срок с соблюдением требований к качеству.',
    ],
    gallery: [`${P}/project-2.jpg`, `${P}/sector-networks.jpg`, `${P}/sector-utilities.jpg`],
  },
  'industrial-plant': {
    slug: 'industrial-plant',
    lead: 'Комплексная инженерная инфраструктура промышленного объекта: сети, сооружения и сопровождение реализации.',
    overview: [
      'На площадке требовалось создать полный комплекс инженерных сетей и сооружений и обеспечить единое управление реализацией.',
      'АРКОН выступил единым подрядчиком: проектирование, строительство и инженерное сопровождение в одном контуре ответственности.',
    ],
    task: 'Обеспечить промышленный объект полным комплексом инженерных сетей и сооружений в единой ответственности.',
    result: [
      'Создана инженерная инфраструктура объекта, обеспечена готовность к вводу технологического оборудования.',
      'Единый подрядчик сократил сроки согласований между этапами.',
    ],
    gallery: [`${P}/project-3.jpg`, `${P}/sector-industrial.jpg`, `${P}/service-construction.jpg`],
  },
};

const projectsEn: Record<string, ProjectDetail> = {
  'port-hydro': {
    slug: 'port-hydro',
    lead: 'Reconstruction of a berth complex with dredging and restoration of the quay wall load-bearing structures.',
    overview: [
      'The facility required restoring the operational characteristics of the berth while keeping the port in operation. Works were phased around navigation and weather windows.',
      'ARCON delivered the full cycle: survey, design solutions, dredging and civil works, including the underwater part.',
    ],
    task: 'Restore the bearing capacity of the quay wall and ensure design depths at the berth without halting port operation.',
    result: [
      'The berth was returned to operation with design characteristics and safe depths at the wall.',
      'The key stage was delivered ahead of schedule.',
    ],
    gallery: [`${P}/project-1.jpg`, `${P}/sector-port.jpg`, `${P}/sector-hydro.jpg`],
  },
  'water-networks': {
    slug: 'water-networks',
    lead: 'Construction of large-diameter trunk water supply networks with connection to the operating system.',
    overview: [
      'The project involved laying trunk pipelines and tying them into the existing network without long interruptions to water supply.',
      'In-house crews and equipment kept a tight schedule within operating infrastructure.',
    ],
    task: 'Lay trunk water supply networks and connect them to the operating system with minimal impact on consumers.',
    result: [
      'Trunk networks were commissioned, improving the reliability of the district’s water supply.',
      'Works were completed on time and to quality requirements.',
    ],
    gallery: [`${P}/project-2.jpg`, `${P}/sector-networks.jpg`, `${P}/sector-utilities.jpg`],
  },
  'industrial-plant': {
    slug: 'industrial-plant',
    lead: 'Comprehensive engineering infrastructure for an industrial facility: networks, structures and delivery supervision.',
    overview: [
      'The site required a full set of engineering networks and structures with unified delivery management.',
      'ARCON acted as a single contractor: design, construction and engineering supervision within one accountability perimeter.',
    ],
    task: 'Provide the industrial facility with a full set of engineering networks and structures under single accountability.',
    result: [
      'The facility’s engineering infrastructure was built, ready for installation of process equipment.',
      'A single contractor shortened approval times between stages.',
    ],
    gallery: [`${P}/project-3.jpg`, `${P}/sector-industrial.jpg`, `${P}/service-construction.jpg`],
  },
};

// ---------- НОВОСТИ ----------
const newsRu: Record<string, NewsDetail> = {
  'news-1': {
    slug: 'news-1',
    lead: 'Сдан ключевой этап реконструкции причального комплекса — с опережением графика.',
    body: [
      'Завершён ключевой этап работ по реконструкции причального комплекса. Выполнены дноуглубительные работы и восстановление несущих конструкций причальной стенки.',
      'Работы велись без остановки эксплуатации порта, с учётом навигации и погодных окон. Ключевой этап сдан с опережением графика.',
      'Проект демонстрирует возможности компании вести гидротехнические и подводные работы в составе полного цикла.',
    ],
  },
  'news-2': {
    slug: 'news-2',
    lead: 'Расширен парк специальной техники для гидротехнических и земляных работ.',
    body: [
      'Компания инвестировала в обновление парка специальной техники. Новое оборудование задействовано на гидротехнических и земляных работах.',
      'Собственный парк техники — часть принципа единой ответственности: ключевые ресурсы находятся в управлении компании, а не привлекаются от случая к случаю.',
      'Обновление повышает производительность и предсказуемость сроков на технически сложных объектах.',
    ],
  },
  'news-3': {
    slug: 'news-3',
    lead: 'Внедрение BIM на объектах инженерных сетей ускоряет согласования и снижает риски.',
    body: [
      'АРКОН расширяет применение BIM на объектах инженерных сетей. Единая цифровая модель используется для сбора коллизий и увязки инженерных систем ещё на этапе проектирования.',
      'Это сокращает число ошибок на площадке и ускоряет согласования между этапами проекта и строительства.',
      'Развитие цифровых инструментов — часть инженерной культуры компании.',
    ],
  },
};

const newsEn: Record<string, NewsDetail> = {
  'news-1': {
    slug: 'news-1',
    lead: 'A key stage of the berth complex reconstruction has been delivered — ahead of schedule.',
    body: [
      'A key stage of the berth complex reconstruction has been completed. Dredging and restoration of the quay wall load-bearing structures were carried out.',
      'Works were performed without halting port operation, around navigation and weather windows. The key stage was delivered ahead of schedule.',
      'The project demonstrates the company’s ability to deliver hydraulic and underwater works as part of the full cycle.',
    ],
  },
  'news-2': {
    slug: 'news-2',
    lead: 'The special equipment fleet has been expanded for hydraulic and earthworks.',
    body: [
      'The company has invested in renewing its special equipment fleet. The new equipment is used on hydraulic and earthworks.',
      'An in-house equipment fleet is part of the single-accountability principle: key resources are managed in-house rather than hired ad hoc.',
      'The renewal improves productivity and schedule predictability on technically complex facilities.',
    ],
  },
  'news-3': {
    slug: 'news-3',
    lead: 'BIM adoption on utility network projects speeds up approvals and reduces risk.',
    body: [
      'ARCON is expanding the use of BIM on utility network projects. A single digital model is used for clash detection and coordination of engineering systems at the design stage.',
      'This reduces errors on site and speeds up approvals between the design and construction stages.',
      'Developing digital tools is part of the company’s engineering culture.',
    ],
  },
};

// ---------- getters ----------
export function getServiceDetail(locale: Locale, slug: string): ServiceDetail | undefined {
  return (locale === 'en' ? servicesEn : servicesRu)[slug];
}
export function getProjectDetail(locale: Locale, slug: string): ProjectDetail | undefined {
  return (locale === 'en' ? projectsEn : projectsRu)[slug];
}
export function getNewsDetail(locale: Locale, slug: string): NewsDetail | undefined {
  return (locale === 'en' ? newsEn : newsRu)[slug];
}
