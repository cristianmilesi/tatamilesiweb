import React from "react";
import { Modal } from "../common/Modal";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

interface Musician {
  name: string;
  role: string;
}

interface Album {
  id: number;
  title: string;
  generalInfo: string;
  year: string;
  label?: string;
  producer?: string;
  recordingStudio?: string;
  additionalCredits?: string;
  musicians?: Musician[];
}

interface TechnicalSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  album: Album;
  labels: {
    generalInfo: string;
    title: string;
    releaseYear: string;
    label: string;
    producer: string;
    recordingStudio: string;
    musicians: string;
    additionalCredits: string;
  };
}

const TechnicalSheetModal: React.FC<TechnicalSheetModalProps> = ({
  isOpen,
  onClose,
  album,
  labels,
}) => {
  const { t, i18n } = useTranslation("music");
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${t("technicalSheetButton")} - ${album.title}`}
    >
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold mb-2">{labels.generalInfo}</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-medium">{labels.title}:</span> {album.title}
            </li>
            <li>
              <span className="font-medium">{labels.releaseYear}:</span>{" "}
              {album.year}
            </li>
            <li>
              <span className="font-medium">{labels.label}:</span>{" "}
              {album.label || "Independiente"}
            </li>
            <li>
              <span className="font-medium">{labels.producer}:</span>{" "}
              {album.producer || "Nombre del productor"}
            </li>
            <li>
              <span className="font-medium">{labels.recordingStudio}:</span>{" "}
              {album.recordingStudio || "Estudio de grabación"}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">{labels.musicians}</h4>
          <ul className="list-disc pl-5 space-y-1">
            {album.musicians?.map((musician, index) => (
              <li key={index}>
                <span className="font-medium">{musician.name}:</span>{" "}
                {musician.role}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">
            {labels.additionalCredits}
          </h4>
          <p className="text-gray-700 whitespace-pre-line">
            {album.additionalCredits ||
              "Información sobre ingenieros de sonido, diseño de portada, agradecimientos especiales, etc."}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default TechnicalSheetModal;
