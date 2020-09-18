import React from "react";
import { NavLink } from "react-router-dom";
import inboxImg from "../img/svg/inbox.svg";
import tagsImg from "../img/svg/tags.svg";
import flagImg from "../img/svg/flag.svg";
import projectImg from "../img/svg/projects.svg";
import chartImg from "../img/svg/chart.svg";
import cupImg from "../img/svg/cup.svg";

export default function Navigation() {
  return (
    <div className="nav w-16 h-full flex-col bg-gray-900">
      <Nav
        to="/inbox"
        title="Inbox"
        icon={inboxImg}
        color="border-indigo-300"
      />
      <Nav to="/projects" title="Projects" icon={projectImg} />
      <Nav to="/tags" title="Tags" icon={tagsImg} />
      <Nav
        to="/prognose"
        title="Prognose"
        icon={chartImg}
        color="border-red-600"
      />
      <Nav to="/flag" title="Flag" icon={flagImg} color="border-orange-500" />
      <Nav
        to="/review"
        title="Review"
        icon={cupImg}
        color="border-indigo-500"
      />
    </div>
  );
}

interface INavLink {
  to: string;
  title: string;
  icon: string;
  color?: string;
}

function Nav({ to, title, icon, color }: INavLink) {
  return (
    <NavLink
      to={to}
      activeClassName="bg-gray-800"
      className={`block w-full flex-col py-2 border-l-4 ${
        color ? color : "border-gray-800"
      }`}
    >
      <img src={icon} alt="" className="mx-auto h-8" />
      <div className="text-xs text-white text-center">{title}</div>
    </NavLink>
  );
}
