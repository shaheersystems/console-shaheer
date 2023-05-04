import React from "react";
import { Link } from "react-router-dom";
function GotoLink({ name, link, action = "Follow" }) {
  return (
    <Link
      to={link}
      className='py-3 group text-sm w-full flex gap-2 items-center justify-between text-gray hover:text-white transition'
    >
      <span>{name}</span>
      <div className='h-[1px] bg-gray group-hover:bg-white transition flex-1'></div>
      <span>{action}</span>
    </Link>
  );
}

export default GotoLink;
