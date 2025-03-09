import "./App.css";
import TimelineSection from "./components/Timeline";

// AUS student to resident data
const timelineData1 = [
  {
    title: "Student Visa (Subclass 500)",
    duration: "2-4 years",
    description: "Initial visa for studying at an Australian institution",
    requirements: [
      "Confirmed enrollment in course",
      "English language proficiency (IELTS 5.5+)",
      "Financial capacity proof ($21,041 per year)",
      "Overseas Student Health Cover",
      "Genuine temporary entrant requirement",
    ],
  },
  {
    title: "Temporary Graduate Visa (Subclass 485)",
    duration: "2-4 years",
    description: "Post-study work visa for gaining Australian experience",
    requirements: [
      "Completed Australian qualification",
      "Apply within 6 months of completion",
      "English proficiency (IELTS 6.0+)",
      "Under 50 years old",
      "Skills assessment in nominated occupation",
    ],
  },
  {
    title: "Skilled Independent Visa (Subclass 189)",
    duration: "Permanent",
    description: "Permanent residence through skilled migration pathway",
    requirements: [
      "Points test score of 65+",
      "Occupation on skilled occupation list",
      "Positive skills assessment",
      "Under 45 years old",
      "English proficiency (IELTS 6.0+)",
      "Health and character requirements",
    ],
  },
  {
    title: "Australian Citizenship",
    duration: "Permanent",
    description: "Full citizenship rights and privileges",
    requirements: [
      "4 years residence in Australia",
      "12 months as permanent resident",
      "Pass citizenship test",
      "Good character",
      "Intent to live in Australia",
      "English language ability",
    ],
  },
];
function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* heading */}
      <h3 className="text-3xl font-bold max-w-xl px-4 mx-auto mt-8">
        Example Pathway to Residence or Citizenship
      </h3>

      {/* timelines */}
      <div className="flex row-auto flex-wrap justify-center">
        <TimelineSection timelineData={timelineData1} />
      </div>
    </div>
  );
}

export default App;
