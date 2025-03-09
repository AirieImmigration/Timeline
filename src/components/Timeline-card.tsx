import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";


interface TimelineCardProps {
  title: string;
  duration: string;
  description: string;
  requirements: string[];
  color: string;
  isLast: boolean;
  isFirst: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  duration,
  description,
  requirements,
  color,
  isLast,
  isFirst,
}) => {
  return (
    <div
      className="flex flex-col justify-center align-middle shadow-lg relative border border-gray-200 p-5 rounded-md max-w-md transition-all duration-300"
      style={{
        boxShadow: `0px 0px 8px 2px ${color}33`,
      }}
    >
      {/* visa title */}
      <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
      {/* duration */}
      <time className="text-xs tracking-wide uppercase dark:text-gray-600 italic mt-2">
        {duration}
      </time>

      {/* visa description */}
      <p className="mt-2">{description}</p>

      {/* requirements */}
      <ul className="list-outside list-disc text-gray-600 text-xs mt-2 pl-3">
        {requirements.map((req, idx) => (
          <li key={idx}>{req}</li>
        ))}
      </ul>

      {/* circle for first and last items, Triangle for everything else */}
      {isFirst || isLast ? (
        <div
          className="absolute top-2 w-8 h-8 rounded-full left-[-52px] z-[1]"
          style={{
            backgroundColor: color,
            boxShadow: `0px 0px 6px 1px ${color}55`,
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faAngleDoubleDown}
          className="absolute top-2 left-[-49px] z-[1] text-3xl"
          style={{ color: color }}
        />
      )}

      <div className="flex items-center justify-end w-full pt-3">
        {/* Right Button */}
        <button className="px-3 py-2 text-xs bg-gray-200 text-black rounded-md shadow-sm hover:bg-amber-200 transition-all cursor-pointer">
          <FontAwesomeIcon icon={faInfo} />
        </button>
      </div>
    </div>
  );
};

export default TimelineCard;
