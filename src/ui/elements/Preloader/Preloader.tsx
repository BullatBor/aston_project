import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { TPreloaderProps } from "./Preloader.types";

import styles from "./Preloader.module.css";

const Preloader: React.FC<TPreloaderProps> = ({
  width = 20,
  className = "",
}): JSX.Element => {
  const hexColor = "#000";

  return (
    <div className={cn(styles.root, className)} style={{ width: `${width}px` }}>
      <svg className={styles.loader} viewBox="25 25 50 50">
        <circle
          className={styles.front}
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="10"
          strokeMiterlimit="10"
          stroke={hexColor}
        />
        <circle
          className={styles.back}
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke={hexColor}
          strokeWidth="10"
        />
      </svg>
    </div>
  );
};

Preloader.propTypes = {
  width: PropTypes.number,
  className: PropTypes.string,
};

Preloader.defaultProps = {
  width: 20,
  className: "",
};

export default Preloader;
