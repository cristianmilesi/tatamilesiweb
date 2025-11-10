import type React from "react";
import { useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaTicketAlt,
} from "react-icons/fa";
import { tourDates } from "../assets/data/tour-dates"; //
import { useTranslation } from "react-i18next";

const Tour: React.FC = () => {
  const [filter] = useState<string>("all");
  const { t, i18n } = useTranslation("tour");

  const filteredDates =
    filter === "all" ? tourDates : tourDates.filter((date) => !date.soldOut);

  // Función para formatear fechas según el idioma
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat(i18n.language, {
      year: t("dateFormat.year") as Intl.DateTimeFormatOptions["year"],
      month: t("dateFormat.month") as Intl.DateTimeFormatOptions["month"],
      day: t("dateFormat.day") as Intl.DateTimeFormatOptions["day"],
    }).format(date);
  };

  return (
    <div className="py-20 bg-verdeoscuro  text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t("pageTitle")}</h2>
          <div className="w-20 h-1 bg-verdeclaro mx-auto"></div>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            {t("pageDescription")}
          </p>
        </div>

        <div className="space-y-4">
          {filteredDates.length > 0 ? (
            filteredDates.map((tourDate) => (
              <div
                key={tourDate.id}
                className="bg-gray-800/80 rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-750 transition duration-400 hover:scale-101 "
              >
                <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-0">
                  <div className="flex items-center mb-2 md:mb-0 md:mr-8">
                    <FaCalendarAlt className="text-gray-200 mr-2" />
                    <span className="font-semibold">
                      {formatDate(tourDate.date)}
                    </span>
                  </div>
                  <div className="flex items-center mb-2 md:mb-0 md:mr-8">
                    <FaMapMarkerAlt className="text-gray-200 mr-2" />
                    <span>
                      <span className="font-medium">{tourDate.venue}</span> •{" "}
                      {tourDate.city}, {t(`${tourDate.country}`)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="text-gray-200 mr-2" />
                    <span>{tourDate.time}</span>
                  </div>
                </div>

                <div>
                  {tourDate.soldOut ? (
                    <span className="inline-block bg-red-900 text-red-100 px-4 py-2 rounded-full text-sm font-medium">
                      Sold Out
                    </span>
                  ) : (
                    <a
                      href={tourDate.ticketUrl}
                      target="_blank"
                      className="inline-flex items-center bg-verdeclaro hover:bg-verde text-gray-800 hover:text-gray-200 px-6 py-2 rounded-full text-sm font-medium transition duration-300"
                    >
                      <FaTicketAlt className="mr-2" />
                      <span>+ Info</span>
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            // <div className="text-center py-10 bg-gray-800 rounded-lg">
            //   <p className="text-xl text-gray-300">
            //     {t("contactForBookingMessage")}
            //   </p>
            //   <p className="text-gray-400 mt-2">
            //     {t("contactForBookingButton")}
            //   </p>
            // </div>

            <div className="text-center py-10 bg-gray-800 rounded-lg">
              <p className="text-xl text-gray-300">{t("noShowsMessage")}</p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-200 mb-6">{t("contactForBookingMessage")}</p>
          <a
            href="#contact"
            className="inline-flex items-center border-2 border-gray-200 text-gray-300 px-6 py-3 rounded-full font-medium hover:bg-verde hover:text-white transition duration-300"
          >
            {t("contactForBookingButton")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tour;
