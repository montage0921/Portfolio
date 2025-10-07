import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineTag from "../utility/TimelineTag";
import TimelineIcon from "../utility/TimelineIcon";

export default function MeTimeLine() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div
        style={{
          height: "500px",
          overflowY: "scroll",
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* IE/Edge */,
        }}
      >
        <VerticalTimeline lineColor="hsl(250 47% 60%)" layout="1-column-left">
          <VerticalTimelineElement
            contentStyle={{
              background: "hsl(var(--card-bg))",
              color: "hsl(var(--card-text))",
              boxShadow: "none",
              borderRadius: "12px",
              width: "440px",
              paddingBottom: "0px",
              paddingRight: "25px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  hsl(var(--card-bg))",
            }}
            iconStyle={{
              boxShadow: "none",
            }}
            icon={<TimelineIcon imgName="blinkle.jpg" />}
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">
                Software Engineer Intern
              </h3>
              <div className="flex gap-3 text-[hsl(var(--date-color))] font-semibold">
                <h4>NY, USA</h4>
                <h4 className="">2025.03-2025.10</h4>
                <h4>Blinkle AI</h4>
              </div>

              <div className="flex flex-wrap gap-2 mt-1">
                <TimelineTag text={"Full-Stack Developemnt"} />
                <TimelineTag text={"TypeScript"} />
                <TimelineTag text={"React"} />
                <TimelineTag text={"Node JS"} />
              </div>
              <div className="">
                <p className="text-base !font-normal text-justify">
                  Worked with cross-functional teams to design, implement, and
                  optimize full-stack features for an innovative
                  resume-tailoring and job-board platform.
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
