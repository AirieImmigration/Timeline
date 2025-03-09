import React from "react";
import TimelineCard from "./Timeline-card";

const colors = ["#FDDE5B", "#B3DA89", "#37D3D8"];

interface TimelineItem {
  title: string;
  duration: string;
  description: string;
  requirements: string[];
}

interface TimelineSectionProps {
  timelineData: TimelineItem[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ timelineData }) => {
  const getColorForIndex = (index: number) => {
    if (index === 0) return colors[0]; // blue
    if (index === timelineData.length - 1) return colors[2]; // yello
    return colors[1]; // green midd
  };

  return (
    <section className="dark:text-gray-800">
      <div className="container max-w-5xl px-4 py-12 mx-auto flex justify-center items-center">
        <div className="grid gap-4 mx-4">
          <div className="relative col-span-12 px-5 space-y-12">
            {/* timeline - line (before = line)*/}
            <div className="col-span-1 space-y-10 relative px-4 before:absolute before:top-5 before:bottom-0 before:w-1.5 before:-left-5.5 before:bg-gradient-to-b before:from-[#FDDE5B] before:via-[#B3DA89] before:to-[#37D3D8] before:opacity-50">
              {timelineData.map((item, index) => (
                <TimelineCard
                  key={index}
                  title={item.title}
                  duration={item.duration}
                  description={item.description}
                  requirements={item.requirements}
                  color={getColorForIndex(index)}
                  isLast={index === timelineData.length - 1}
                  isFirst={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
