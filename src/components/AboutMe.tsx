import React from 'react';
import { BookOpen, Award, GraduationCap, Languages, MapPin, Music, Coffee, Globe2 } from 'lucide-react';
import { education, achievements } from '../data/profile';
import ProfileImage from './ProfileImage';

export const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0B0B1F] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Profile Section */}
          <div className="space-y-8">
            <div className="flex flex-col items-center">
              <div className="mb-8">
                <div className="w-64 h-64 overflow-hidden border-4 border-[#F7EF40] rounded-lg shadow-lg">
                  <ProfileImage
                    username="jordanvillacorta"
                    repo="power-giving-leader"
                    imagePath="images/WV_2022.jpg"
                    alt="Dr. Villacorta Profile Picture"
                  />
                </div>
              </div>
              <h2 className="text-4xl font-serif font-bold text-white mb-6">
                <span className="text-[#F7EF40]">Dr. Wilmer G. Villacorta</span>
              </h2>
              <div className="prose prose-invert">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I was born in Lima, Peru, and lived in Paris, France, for several years. I moved to the US in 1985, living in many major cities (New York, Philadelphia, Los Angeles). I have lived in Colorado Springs with my wife Jeannie and four kids since 2008. Although I lived in large cities on three continents, I got used to living in Colorado. My children (ages 33, 30, 27, and 24) learned to appreciate living in a small city more than I do. It is so amazing to see the wonder of God's creation just by living in this city. I am so thankful for such a gift of beauty. Besides all of the above, we have become grandparents; it is so exciting to see how it changes our lives and love for Colorado!
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mt-8">
                  My first book, titled &quot;Tug of War: The Downward Ascent of Power,&quot; published in July
2017, is currently part of the MAGL curriculum. My second publication, &quot;Unmasking the
Male Soul: Power and Gender Trap for Women in Leadership,&quot; was published in
September 2019. Both textbooks are the result of walking alongside female and male
leaders serving in complex leadership contexts and seeing God&#39;s transformative work in
their lives. I also have a third publication (March 2024), a translation of my first book in Spanish, "Pugna por Poder".
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#2D7F4E] p-6 rounded-lg">
                <Globe2 className="w-8 h-8 text-[#FFD700] mb-3" />
                <h3 className="text-white font-semibold mb-2">
                  Cultural Background
                </h3>
                <p className="text-gray-300">
                  Third-culture adult (Peruvian, French, and American) with experience in every continent, passionate about cultural intersections and their influence on worldview, Scripture, and church.
                </p>
              </div>
              <div className="bg-[#4A0E4E] p-6 rounded-lg">
                <Languages className="w-8 h-8 text-[#FFD700] mb-3" />
                <h3 className="text-white font-semibold mb-2">
                  Languages & Interests
                </h3>
                <p className="text-gray-300">
                  Fluent in multiple languages with a special love for French, avid soccer player, and musician (guitar, piano, Andean flute, and pan pipes).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#663399] p-6 rounded-lg">
                <Coffee className="w-8 h-8 text-[#FFD700] mb-3" />
                <h3 className="text-white font-semibold mb-2">
                  Personal Interests
                </h3>
                <p className="text-gray-300">
                  Enjoys cooking gourmet Peruvian food, sharing coffee or tea with friends, and engaging in meaningful conversations.
                </p>
              </div>
              <div className="bg-[#80002A] p-6 rounded-lg">
                <BookOpen className="w-8 h-8 text-[#FFD700] mb-3" />
                <h3 className="text-white font-semibold mb-2">
                  Academic Interests
                </h3>
                <p className="text-gray-300">
                  Passionate about Jürgen Moltmann's theology, St. Francis of Assisi, and various spiritual writers.
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