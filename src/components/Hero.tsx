import React from 'react';
import {
  Scroll,
  BookText,
  GraduationCap,
  Calendar,
  Globe2,
} from 'lucide-react';
import ProfileImage from './ProfileImage';
import BookPurchaseLinks from './BookPurchaseLinks';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className={styles.title}>
              <span className="text-[#F7EF40]">Power</span>-Giving
              <span className="text-[#8A4FFF]"> Leader</span>
            </h1>
            <p className={styles.subtitle}>
              Welcome to the academic home of Dr. Villacorta, Associate
              Professor of Intercultural Studies from Fuller Theological
              Seminary.
            </p>
            <div className="prose prose-invert">
              <p className="text-gray-300 text-lg leading-relaxed">
                Wilmer G. Villacorta (Ph.D '08, M.Div '98) who joined the Fuller
                faculty in 2009, is Associate Professor of Intercultural
                Studies, teaching for the Master of Arts in Global Leadership,
                first online degree program since 2004. In addition to teaching
                at the MAGL, Villacorta's research and teaching have focused on
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
            <div className={styles.cardGlow}></div>
            <div className={styles.featuredCard}>
              <div className="flex items-center space-x-2 mb-6">
                <BookText className="h-6 w-6 text-[#F7EF40]" />
                <h2 className={styles.featuredTitle}>Featured Publication</h2>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="relative group">
                  <div className="relative">
                    <a
                      href="https://wipfandstock.com/9781532652349/unmasking-the-male-soul/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transform transition-transform hover:scale-105"
                    >
                      <ProfileImage
                        username="jordanvillacorta"
                        repo="power-giving-leader"
                        imagePath="images/Unmasking.jpg"
                        alt="Unmasking the Male Soul book cover"
                        className="w-64 h-auto rounded-lg shadow-xl"
                      />
                    </a>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <a
                    href="https://wipfandstock.com/9781532652349/unmasking-the-male-soul/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <h3 className="text-2xl font-serif text-[#F7EF40] group-hover:text-[#8A4FFF] transition-colors">
                      Unmasking the Male Soul
                    </h3>
                  </a>

                  <div className="flex flex-wrap gap-4 text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-[#F7EF40]" />
                      <span>Published 2019</span>
                    </div>
                    <div className="flex items-center">
                      <Globe2 className="h-4 w-4 mr-2 text-[#F7EF40]" />
                      <span>Wipf and Stock Publishers</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    A groundbreaking exploration of gender dynamics and power
                    relationships in Christian leadership, examining how
                    traditional masculine paradigms affect women in leadership
                    positions.
                  </p>

                  <div className="pt-4">
                    <h4 className="text-[#F7EF40] font-medium mb-2">
                      Available at:
                    </h4>
                    <BookPurchaseLinks />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
