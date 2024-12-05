import React from 'react';
import { BookOpen, Award, GraduationCap, Languages } from 'lucide-react';
import { education, achievements } from '../data/profile';

export const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0B0B1F] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Profile Section */}
          <div className="space-y-8">
            <div className="flex flex-col items-center lg:items-start">
              <div className="mb-8 relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#F7EF40] shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=800"
                    alt="Dr. Villacorta"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#663399] to-[#8A4FFF] rounded-full blur opacity-30"></div>
              </div>
              <h2 className="text-4xl font-serif font-bold text-white mb-6">
                About{' '}
                <span className="text-[#F7EF40]">Dr. Wilmer G. Villacorta</span>
              </h2>
              <div className="prose prose-invert">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Dr. Villacorta joined the School of Intercultural Studies
                  faculty in 2009, after serving three years as a spiritual
                  mentor for in-service leaders at Fuller and teaching four
                  years as an adjunct professor in the Master of Arts in Global
                  Leadership (MAGL) program.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                  Prior to coming to Fuller, Dr. Villacorta served on faculty at
                  the Center of Discipleship and Mission in Alhambra,
                  California, the Missionary School of Emmanuel Bible Church in
                  Peru, and the Latin American School of Missiology in Peru,
                  where he also served as dean for four years.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                  He is the author of "Unmasking the Male Soul: Power and Gender
                  Trap for Women in Leadership" (2019) and "Tug of War: The
                  Downward Ascent of Power" (2017). His research focuses on
                  transformational leadership and gender dynamics in religious
                  contexts.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#2D7F4E] p-6 rounded-lg">
                <BookOpen className="w-8 h-8 text-[#FFD700] mb-3" />
                <h3 className="text-white font-semibold mb-2">
                  Areas of Expertise
                </h3>
                <p className="text-gray-300">
                  Character/spiritual development, gender studies, women in
                  leadership, masculinities, social power dynamics, and applied
                  missiology
                </p>
              </div>
              <div className="bg-[#4A0E4E] p-6 rounded-lg">
                <Languages className="w-8 h-8 text-[#FFD700] mb-3" />
                <h3 className="text-white font-semibold mb-2">
                  Language Expertise
                </h3>
                <p className="text-gray-300">
                  Biblical Hebrew, Aramaic, Ancient Greek, Latin
                </p>
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#8A4FFF] mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-[#0B0B1F] border border-[#4A0E4E] p-4 rounded-lg hover:border-[#8A4FFF] transition-colors"
                  >
                    <h4 className="text-[#FFD700] font-semibold">
                      {edu.degree} in {edu.field}
                    </h4>
                    <p className="text-gray-300">{edu.institution}</p>
                    <p className="text-sm text-gray-400">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-[#8A4FFF] mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2" />
                Recent Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-[#0B0B1F] border border-[#4A0E4E] p-4 rounded-lg hover:border-[#8A4FFF] transition-colors"
                  >
                    <h4 className="text-[#FFD700] font-semibold">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-300">{achievement.organization}</p>
                    <p className="text-sm text-gray-400">{achievement.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
