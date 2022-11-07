import React from "react";
import headerImage from "../assets/imageHeader.jpg";
import { colors } from "../themes/colors";

export const SectionImage = () => {
  const styles = {
    image: {
      backgroundImage: `url(${headerImage})`,
      height: "50vh",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      minHeight: "auto",
      width: "100%",
    },
  };
  return <section style={styles.image} />;
};
