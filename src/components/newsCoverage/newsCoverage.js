import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

import BusinessToday from '../../assets/images/businessTodayLogo.png';
import ETNewsLogo from '../../assets/images/etNowWeb.png';
import ETTelecom from '../../assets/images/ettelecom.png';
import Inc42 from '../../assets/images/inc42.png';
import LiveMint from '../../assets/images/livemint-logo-v1.svg';
import YourStory from '../../assets/images/logo_yourstory.svg';
import StartupWorld from '../../assets/images/startupworld.png';
import TimesNow from '../../assets/images/timesnownews.png';
import styles from './newsCoverage.module.scss';

const NewsCoverage = () => {
  const news = [
    {
      agency: 'Economic Time',
      logo: ETNewsLogo,
      news: 'Airtel acquires 10% stake in edu-tech startup Lattu Media',
      link:
        'https://economictimes.indiatimes.com/small-biz/startups/airtel-acquires-10-stake-in-edu-tech-start-up-lattu-media/articleshow/76429527.cms',
    },
    {
      agency: 'Live Mint',
      logo: LiveMint,
      news:
        'Bharti Airtel acquires strategic stake in edtech startup Lattu Media',
      link:
        'https://www.livemint.com/companies/start-ups/bharti-airtel-acquires-strategic-stake-in-edtech-startup-lattu-media-11592385972518.html',
    },
    {
      agency: 'ET Telecom',
      logo: ETTelecom,
      news: 'Airtel acquires 10% stake in Edtech startup Lattu Media',
      link:
        'https://telecom.economictimes.indiatimes.com/news/airtel-acquires-strategic-stake-in-edtech-startup-lattu-media/76422645',
    },
    {
      agency: 'Business Today',
      logo: BusinessToday,
      news: 'Bharti Airtel buys strategic stake in edtech start-up Lattu Kids',
      link:
        'https://www.businesstoday.in/current/corporate/bharti-airtel-buys-strategic-stake-in-edtech-start-up-lattu-kids/story/407228.html',
    },
    {
      agency: 'Times Now News',
      logo: TimesNow,
      news: "Airtel's rationale for Lattu Investment | Startup Central",
      link:
        'https://www.timesnownews.com/videos/et-now/shows/airtels-rationale-for-lattu-investment-startup-central/65574',
    },
    {
      agency: 'Inc 42',
      logo: Inc42,
      news: 'Airtel Enters Edtech, Picks 10% Stake In Lattu Kids',
      link:
        'https://inc42.com/buzz/airtel-enters-edtech-picks-10-stake-in-lattu-kids/',
    },
    {
      agency: 'Your Story',
      logo: YourStory,
      news:
        '[Funding alert] Bharti Airtel acquires strategic stake in kids learning startup Lattu Kids',
      link:
        'https://yourstory.com/2020/06/bharti-airtel-kids-learning-startup-lattu-kids',
    },
    {
      agency: 'Startup World',
      logo: StartupWorld,
      news:
        'Under Startup Accelerator Program Airtel Acquires 10% Stake In Lattu Kids',
      link:
        'https://www.startupworld.com/news/airtel-acquries-stake-in-lattu-kids/',
    },
  ];

  const getSlides = () => {
    return news.map((n, i) => {
      return (
        <div id={'news-' + i} key={i} className={styles.eachSlide}>
          <a href={n.link} target="_blank" rel="noopener noreferrer">
            <div className={styles.line1}>
              <div className={styles.logo}>
                <img src={n.logo} alt="ET News" />
              </div>
              {/* <div className={styles.agency}>{n.agency}</div> */}
            </div>
            <div className={styles.news}>{n.news}</div>
          </a>
        </div>
      );
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>Lattu Kids in the news</div>
      {/* <div className={styles.slides}>{getSlides()}</div> */}
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 4090,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
        dots={true}
        showSides={false}
        autoCycle={true}
        arrows={false}>
        {getSlides()}
      </InfiniteCarousel>
    </div>
  );
};

export default NewsCoverage;
