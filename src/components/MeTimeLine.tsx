import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineTag from "../utility/TimelineTag";
import TimelineIcon from "../utility/TimelineIcon";
import timeline from "../data/timeline.json";

export default function MeTimeLine() {
  return (
    <div
      className="w-full max-w-[600px] h-[500px] overflow-y-auto"
      style={{
        marginTop: "30px",

        scrollbarWidth: "none" /* Firefox */,
        msOverflowStyle: "none" /* IE/Edge */,
      }}
    >
      <VerticalTimeline lineColor="hsl(250 47% 60%)" layout="1-column-left">
        {timeline.map((t) => (
          <VerticalTimelineElement
            className="w-[100%] md:w-[500px]"
            contentStyle={{
              background: "hsl(var(--card-bg))",
              color: "hsl(var(--card-text))",
              boxShadow: "none",
              borderRadius: "12px",
              paddingBottom: "0px",
              paddingRight: "25px",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  hsl(var(--card-bg))",
            }}
            iconStyle={{
              boxShadow: "none",
            }}
            icon={<TimelineIcon imgName={t.img} />}
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">{t.title}</h3>

              <div className="flex gap-3 text-[hsl(var(--date-color))] font-semibold">
                {t.organization && <h4>{t.organization}</h4>}
                {t.location && <h4>{t.location}</h4>}
                <h4 className="">{t.date}</h4>
              </div>

              {t.skills && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {t.skills.map((s) => (
                    <TimelineTag text={s} />
                  ))}
                </div>
              )}

              <div className="">
                <p className="text-base !font-normal text-justify">
                  {t.description}
                </p>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
