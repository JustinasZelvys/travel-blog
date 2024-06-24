import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>ABOUT ME</h2>
      <div className="sidebar-content">
        <img src="/thailand.jpg" alt="About Me" className="sidebar-photo" />
        <p>
          Hey there! I'm Justinas Želvys, an Lithuanina who has been traveling
          the world full time for 2 years now. I'am usually in my second home
          Bali, but my journeys takes me to destinations all over the world.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
