import React from 'react';
import { Scroll, BookText, GraduationCap } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="min-h-screen bg-[#0B0B1F] text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              <span className="text-[#F7EF40]">Power</span>-Giving
              <span className="text-[#8A4FFF]"> Leader</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Welcome to the academic home of Dr. Villacorta, Associate
              Professor of Intercultural Studies from Fuller Theological
              Seminary.
            </p>
            <div className="prose prose-invert">
              <p className="text-gray-300 text-lg leading-relaxed">
                Wilmer G. Villacorta (Ph.D ’08, M.Div ’98) who joined the Fuller
                faculty in 2009, is Associate Professor of Intercultural
                Studies, teaching for the Master of Arts in Global Leadership,
                first online degree program since 2004. In addition to teaching
                at the MAGL, Villacorta’s research and teaching have focused on
                character/spiritual development, gender studies, women in
                leadership, masculinities, social power dynamics, and applied
                missiology.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                He has authored Unmasking the Male Soul: Power and Gender Trap
                for Women in Leadership (2019) and Tug of War: The Downward
                Ascent of Power (2017). He is an ordained minister in the
                Mennonite Church (USA) and pastored Hispanic communities in
                Paris (France), California and Colorado.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#663399] to-[#8A4FFF] rounded-lg blur opacity-75"></div>
            <div className="relative bg-[#0B0B1F] p-8 rounded-lg border border-[#4A0E4E]">
              <h2 className="text-2xl font-serif mb-4 text-[#FFD700]">
                Featured Publication
              </h2>
              <p className="text-gray-300 mb-4">
                "Unmasking the Male Soul: Power and Gender Trap
                for Women in Leadership"
              </p>
              <div className="flex items-center text-[#F7EF40]">
                <Scroll className="mr-2" />
                <span>Published in Biblical Theology Quarterly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
