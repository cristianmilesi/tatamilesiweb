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
    date: "2025-05-15", // Formato ISO para facilitar la internacionalización
    venue: "Apero Bar",
    city: "Nürnberg",
    country: "Deutschland",
    time: "19:30",
    ticketUrl: "https://www.instagram.com/bar_apero_nuernberg/",
    soldOut: false,
  },
  {
    id: 2,
    date: "2025-07-03",
    venue: "Rosengasse ",
    city: "Ingolstadt",
    country: "Deutschland",
    time: "20:00",
    ticketUrl:
      "https://www.instagram.com/rosengasse2?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    soldOut: false,
  },
  // Más fechas...
];
