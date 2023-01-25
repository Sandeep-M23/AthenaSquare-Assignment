import type { FC } from "react";
import classes from '../../styles/Logo.module.scss';

const Logo: FC = () => {
  return (
    <div className={classes.logo}>
      <img
        src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png"
        alt="logo"
        className={classes.Image}
      />
    </div>
  );
};

export default Logo;