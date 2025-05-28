import React from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const contacts = [
    { label: "Personal Email", href: "mailto:christophercagney322@gmail.com", text: "christophercagney322@gmail.com" },
    { label: "NYU Email", href: "mailto:ccf9854@nyu.edu", text: "ccf9854@nyu.edu" },
    { label: "Phone", href: "tel:+16174857367", text: "+1 (617) 485-7367" }
  ];

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      <div className="flex-1 bg-[#f4e6ff] text-[#026ead] px-10 py-20">
        <h1 className="text-3xl text-center sm:text-left mb-10">Contact</h1>
        <div className="space-y-6 text-lg font-light max-w-md mx-auto sm:mx-0">
          {contacts.map(({ label, href, text }, i) => (
            <div key={i}>
              <p className="font-semibold">{label}</p>
              <a href={href} className="hover:underline block">{text}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full sm:w-64 bg-[#ffab4a] text-[#026ead] p-6 space-y-8 flex flex-col items-start sm:items-center">
        <Link to="/" className="text-3xl font-bold leading-tight space-y-0">
          <div>Chris</div>
          <div className="-mt-2">Fitzgerald.</div>
        </Link>
        <div className="text-lg font-medium flex flex-col gap-4">
          <Link to="/about">About</Link>
          <Link to="/photography">Photography</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
