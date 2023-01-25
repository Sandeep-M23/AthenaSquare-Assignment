import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import classes from "../styles/Home.module.scss";
import type { NextPage } from "next";

interface Data {
  heading: string;
  subHeading: string;
  description: string;
}

const Home: NextPage<{}> = () => {
  const [activeVideo, setActiveVideo] = useState(1);
  const [data, setData] = useState<Data[]>();
  const [ref1, inView1] = useInView({ threshold: 0.3 });
  const [ref2, inView2] = useInView({ threshold: 0.3 });
  const [ref3, inView3] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView1) {
      setActiveVideo(1);
    }
    if (inView2) {
      setActiveVideo(2);
    }
    if (inView3) {
      setActiveVideo(3);
    }
  }, [inView1, inView2, inView3]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1`
      );
      const data = await res.json();
      setData(data.texts);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.home}>
      <div className={classes.introSection}>
        <h1 className={classes.introTitle}>Double the hires,half the effort</h1>
        <div className={classes.introText}>
          <p>
            Open converstations and nuture relationships and be the first choice
            when your ideal
          </p>
          <p>candidate is ready to explore.</p>
        </div>
        <button className={classes.viewButton}>View Kula Outreach</button>
      </div>
      <div className={classes.mainSection}>
        <div className={classes.textContainer}>
          {data &&
            data.map((d, index) => {
              return (
                <section
                  key={index}
                  ref={index == 0 ? ref1 : index == 1 ? ref2 : ref3}
                >
                  <div className={classes.sectionHeading}>
                    <h2 className={classes.sectionTitle}>{d.heading}</h2>
                    <h1 className={classes.sectionSubTitle}>{d.subHeading}</h1>
                    <p className={classes.sectionDescription}>
                      {d.description.slice(0, 150)}
                    </p>
                  </div>
                  <div className={classes.mobileVideoContainer}>
                    <video
                      autoPlay
                      loop
                      muted
                      className={classes.mobileVideo}
                      src={`/assets/Videos/vid${index + 1}.mp4`}
                    />
                  </div>
                </section>
              );
            })}
        </div>
        <div className={classes.videoContainer}>
          <video
            autoPlay
            loop
            muted
            className={classes.mainVideo}
            src={`/assets/Videos/vid${activeVideo}.mp4`}
          />
        </div>
      </div>
      <div className={classes.extraSection}></div>
    </div>
  );
};

export default Home;
