// src/data/tour-dates.ts
export interface TourDate {
  id: number;
  date: string;
  venue: string;
  city: string;
  country: string;
  time: string;
  ticketUrl: string;
  soldOut: boolean;
}

export const tourDates: TourDate[] = [
  {
    id: 1,
    date: "2026-06-13", // Formato ISO para facilitar la internacionalización
    venue: "Poppinski (Küferstraße 40)",
    city: "Stuttgart",
    country: "Deutschland",
    time: "18:00",
    ticketUrl: "Kostenloser Eintritt",
    soldOut: false,
  },
  {
    id: 2,
    date: "2026-06-06", // Formato ISO para facilitar la internacionalización
    venue: "Gans Woanders (Pingersheimer Straße 13)",
    city: "München",
    country: "Deutschland",
    time: "15:00",
    ticketUrl: "https://www.instagram.com/gans_woanders/",
    soldOut: false,
  },
  {
    id: 3,
    date: "2026-07-25", // Formato ISO para facilitar la internacionalización
    venue: "Fest der Kulturen )",
    city: "Ingolstadt",
    country: "Deutschland",
    time: "15:00",
    ticketUrl: "Kostenloser Eintritt",
    soldOut: false,
  },
  // {
  //   id: 2,
  //   date: "2025-07-03",
  //   venue: "Rosengasse ",
  //   city: "Ingolstadt",
  //   country: "Deutschland",
  //   time: "20:00",
  //   ticketUrl:
  //     "https://www.instagram.com/rosengasse2?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  //   soldOut: false,
  // },
  // Más fechas...
];
