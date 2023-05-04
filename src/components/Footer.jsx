import React, { useEffect, useState } from "react";

function Footer() {
  const [year, setYear] = useState(0);
  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, [year]);
  return (
    <div className='w-full py-3'>
      <p className='text-gray text-sm'>
        © {year + " "}
        <a href='/' className='hover:underline'>
          shaheerystems
        </a>
      </p>
    </div>
  );
}

export default Footer;
