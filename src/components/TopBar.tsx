import React from "react";
import inboxIcon from "../img/png/inbox.png";
import list from "../img/png/list-full.png";
import listRemain from "../img/png/list-remaining.png";
import add from "../img/png/add.png";
import eye from "../img/png/eye.png";
import lightBulb from "../img/png/light-bulb.png";
import search from "../img/png/search.png";

const TopBar: React.FC = () => {
  return (
    <div className="bg-gray-200 flex justify-between items-center py-1">
      <div className="ml-10 flex items-center">
        <TopBarBtn icon={list} clickEvent={() => {}} />
        <TopBarBtn icon={add} clickEvent={() => {}} />
        <TopBarBtn icon={inboxIcon} clickEvent={() => {}} />
      </div>
      <div className="relative">
        <img src={search} alt="" className="absolute h-4 mt-1 ml-1" />
        <input
          placeholder="Zoek hier"
          className="rounded border border-gray-700 w-64 pl-6 py-0 text-sm leading-6"
        />
      </div>
      <div className="mr-10 flex items-center">
        <TopBarBtn icon={eye} clickEvent={() => {}} />
        <TopBarBtn icon={listRemain} clickEvent={() => {}} />
        <TopBarBtn icon={lightBulb} clickEvent={() => {}} />
      </div>
    </div>
  );
};

interface IProp {
  icon: string;
  clickEvent: () => void;
}

const TopBarBtn: React.FC<IProp> = ({ icon, clickEvent }) => {
  return (
    <button
      className="bg-gray-100 w-10 px-2 ml-1 rounded border border-gray-700 focus:outline-none"
      onClick={clickEvent}
    >
      <img src={icon} alt="inbox" className="h-5 border-none" />
    </button>
  );
};

export default TopBar;
