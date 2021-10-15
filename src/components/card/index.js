import React from "react";
import { styles } from "./styles";
const Card = ({ data, compareHandler, removeHandler }) => {
  return (
    <div className="col-md-3 col-sm-4" style={styles.cardWrapper}>
      <div style={styles.innerWrapper}>
        <div style={styles.imgWrapper}>
          <img src={data.thumbnailUrl} style={styles.imgStyle} />
        </div>

        <p style={{ ...styles.title, height: 60, marginTop: 10 }}>
          {data.title}
        </p>
        <p style={styles.title}>{data.id}</p>
        <p style={styles.title}>{data.url}</p>

        <button
          style={styles.buttonStyle}
          onClick={() => {
            if (data.isCompare) {
              compareHandler(data.id);
            } else {
              removeHandler(data.id);
            }
          }}
        >
          {data.isCompare ? "Compare" : "Remove"}
        </button>
      </div>
    </div>
  );
};
export default Card;
