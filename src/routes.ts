export const routes = {
  es: {
    home: "/",
    biography: "/biografia",
    music: "/musica",
    tour: "/gira",
    gallery: "/galeria",
    contact: "/contacto",
    presskit: "/prensa",
  },
  en: {
    home: "/",
    biography: "/biography",
    music: "/music",
    tour: "/tour",
    gallery: "/gallery",
    contact: "/contact",
    presskit: "/press",
  },
  de: {
    home: "/",
    biography: "/biografie",
    music: "/musik",
    tour: "/tournee",
    gallery: "/galerie",
    contact: "/kontakt",
    presskit: "/presse",
  },
};

export type Language = "es" | "en" | "de";
export type RouteKey = keyof typeof routes.es;

export const getRoute = (lang: Language, key: RouteKey): string => {
  return routes[lang][key];
};
