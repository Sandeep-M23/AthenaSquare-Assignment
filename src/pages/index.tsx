import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import classes from '../styles/Home.module.css';
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [video, setVideo] = useState(1);
  const [data,setData] = useState();
    const [ref1, inView1] = useInView(
        {
            threshold: 0.3,
        }
    );
    const [ref2, inView2] = useInView(
        {
            threshold: 0.3,
        }
    );
    const [ref3, inView3] = useInView(
        {
            threshold: 0.3,
        }
    );
    useEffect(() => {
        if (inView1) {
            setVideo(1)
        }
        if (inView2) {
            setVideo(2)
        }
        if (inView3) {
            setVideo(3)
        }
    }, [inView1, inView2, inView3])

    const getData = async () => {
      const res = await fetch(`https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1`)
      const data = await res.json();
    setData(data.texts);
    console.log(data)
    }

    useEffect(() => {
      getData()
    },[])
  return (
    <div className={classes.Home}>
      <div className={classes.introSection}>
        <h1>Double the hires,half the effort</h1>
        <div className={classes.para}>
        <p>Open converstations and nuture relationships and be the first choice when your ideal</p>
        <p>candidate is ready to explore.</p></div>
        <button>View Kula Outreach</button>
      </div>
      <div className={classes.mainSection}>
        <div className={classes.text}>
          {data &&
            data.map((sec, idx) => {
              return (
                <section
                  key={idx}
                  ref={idx == 0 ? ref1 : idx == 1 ? ref2 : ref3}
                >
                  <div className={classes.heading}>
                    <h2>{sec.heading}</h2>
                    <h1>{sec.subHeading}</h1>
                    <p>{sec.description.slice(0,150)}</p>
                  </div>
                  <div className={classes.mobileVideo}>
                    <video
                      autoPlay
                      loop
                      muted
                      src={`/assets/Videos/vid${idx + 1}.mp4`}
                    />
                  </div>
                </section>
              );
            })}
        </div>
        <div className={classes.video}>
          <video autoPlay loop muted src={`/assets/Videos/vid${video}.mp4`} />
        </div>
      </div>
      <div className={classes.extraSection}>
      </div>
    </div>
  );
};

export default Home;
