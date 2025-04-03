import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Event {
  id: number;
  date: string;
  location: string;
  title: string;
  link?: string;
}

const EventBanner: React.FC<{ events: Event[] }> = ({ events }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (events.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [events.length]);

  if (events.length === 0) return null;

  return (
    <div className="bg-primary text-white py-2 text-center">
      <p>
        {events[currentIndex].date} - {events[currentIndex].location}:{" "}
        {events[currentIndex].title}
        {events[currentIndex].link && (
          <a href={events[currentIndex].link} className="ml-2 underline">
            {t("eventBanner.moreInfo")}
          </a>
        )}
      </p>
    </div>
  );
};

export default EventBanner;
