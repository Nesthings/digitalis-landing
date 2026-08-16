export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  src: string;
  alt: string;
  content: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "devops-para-equipos-chicos",
    title: "DevOps para equipos chicos: por dónde empezar sin morir en el intento",
    excerpt:
      "No necesitás un departamento de plataforma para tener buenos deploys. Estas son las prácticas mínimas que valen la pena desde el día uno.",
    date: "2025-06-18",
    category: "DevOps",
    readTime: "6 min",
    author: "Agustín Duarte",
    src: "/placeholders/blog-1.svg",
    alt: "[PLACEHOLDER: portada del artículo sobre DevOps para equipos chicos]",
    content: [
      "Cuando un equipo chico escucha la palabra DevOps, suele imaginarse una plataforma entera con decenas de herramientas. La realidad es mucho más simple: DevOps es la disciplina de llevar código a producción de forma confiable y repetible.",
      "Lo primero que recomendamos es automatizar el deploy. Si hoy tu equipo sube cambios a mano, empezar por ahí te va a dar el retorno más rápido: menos errores humanos, más frecuencia y menos miedo a romper.",
      "Después, agregá tests en el pipeline que frenen un deploy cuando algo está mal. No hace falta cobertura perfecta, hace falta que las pruebas protejan las rutas críticas de tu negocio.",
      "Por último, medí. Métricas simples de uptime, tiempo de deploy y tasa de error te dicen más que cualquier herramienta de moda. El objetivo no es verse moderno, es dormir tranquilo.",
    ],
  },
  {
    slug: "mvp-sin-morir-en-el-intento",
    title: "Cómo lanzar un MVP en 12 semanas sin perder la cordura",
    excerpt:
      "El MVP no es un producto a medias, es la versión más pequeña de algo que funciona. Te contamos cómo lo hacemos en nuestros proyectos.",
    date: "2025-05-02",
    category: "Producto",
    readTime: "8 min",
    author: "Martina Cáceres",
    src: "/placeholders/blog-2.svg",
    alt: "[PLACEHOLDER: portada del artículo sobre lanzar un MVP]",
    content: [
      "El error más común al planificar un MVP es confundir 'poco trabajo' con 'recorte de calidad'. Un MVP bien hecho es la versión mínima de un producto que resuelve un problema real de punta a punta.",
      "La clave está en el alcance: elegir una sola promesa principal y resistir la tentación de agregar features que nadie pidió. Cada pantalla extra que se suma multiplica el riesgo de no llegar a la fecha.",
      "En nuestro proceso dividimos las 12 semanas en tres bloques: descubrimiento y arquitectura, construcción del core, y pulido con feedback de usuarios reales. El deploy empieza en la semana cuatro, no al final.",
      "Si estás por arrancar un MVP, te dejamos la pregunta que más nos funciona: ¿qué es lo mínimo que tiene que hacer el producto para que alguien quiera pagar por él? Respondé eso y el resto se ordena solo.",
    ],
  },
  {
    slug: "deuda-tecnica-intencional",
    title: "Deuda técnica: la diferencia entre la intencional y la que te persigue",
    excerpt:
      "No toda la deuda técnica es mala. La intencional te ayuda a avanzar rápido. La que no es intencional, te destruye. Cómo distinguirlas.",
    date: "2025-03-11",
    category: "Ingeniería",
    readTime: "5 min",
    author: "Lucas Romero",
    src: "/placeholders/blog-3.svg",
    alt: "[PLACEHOLDER: portada del artículo sobre deuda técnica]",
    content: [
      "Decimos que hay deuda técnica intencional cuando tomás un atajo sabiendo exactamente qué estás postergando y cuándo lo vas a pagar. Ese es un trade-off legítimo: a veces conviene entregar antes.",
      "La deuda que te persigue es la que se acumula sin registro. Nadie documentó el atajo, nadie sabe qué hay que pagar, y con el tiempo cada feature nueva cuesta más que la anterior.",
      "La práctica que más ayuda es llevar un registro simple de deuda: qué se postergó, por qué, y cuándo se va a resolver. No hace falta una herramienta, alcanza con que esté escrito.",
      "Al final, la deuda técnica no es un problema de código, es un problema de comunicación. Los equipos que la manejan bien son los que hablan de ella con naturalidad.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
