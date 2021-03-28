import React from "react";

export default function Loader() {
  return (
    <section className="loader">
      <img
        src={require("../assets/img/loader.gif").default}
        alt=""
        className="loader-img"
      />
    </section>
  );
}
