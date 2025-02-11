import React, { useState } from "react";
import "../App.css";

function Footer() {
  return (
    <section>
      <div className="bg-black relative mb-0">
        <div className="py-10 w-full px-4">
          <div className="grid gap-10 md:grid-cols-3 pb-10">
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Tápanyagtudatos</h4>
              <p className="leading-relaxed">
                Tápanyagtudatos: Az egészséges táplálkozás szakértői oldalán
                fedezheti fel a kiegyensúlyozott étrend titkait. Kiváló
                receptek, hiteles információk és hasznos tippek várják Önt
                minden nap!
              </p>
              <div className="flex gap-5 items-center justify-center">
                <p>Kövess minket!</p>
                <i className="fa-brands fa-facebook cursor-pointer hover:text-blue-600 duration-300"></i>
                <i className="fa-brands fa-instagram cursor-pointer text-white hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] duration-300"></i>
                <i className="fa-brands fa-x cursor-pointer hover:text-gray-700 duration-300"></i>
              </div>
            </div>
            <div></div>
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Tápanyagtudatos</h4>
              <p className="leading-relaxed">Iratkozz fel hírlevelünkre!</p>
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  className="w-2xs text-black bg-green-400 p-2 lg:p-3 lg:p-3-rounded-1-md focus:outline-none rounded-l-md"
                  placeholder="Add meg az email címed"
                />
                <button
                  type="submit"
                  className="bg-green-700 px-4 py-2 lg:px-5 lg:py-3 rounded-r-md hover:opacity-90 hover:cursor-pointer"
                >
                  <i class="fa-solid fa-envelope"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10 border-t pb-5 border-gray-300">
          <p>2024 &copy; Tápanyagtudatos. Minden jog fentartva.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
