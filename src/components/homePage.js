import React from 'react';
import styles from '../assets/UI/Home.module.css';
import Card from '../assets/UI/card.js';
import Image from '../assets/DemoImage.webp';
import CatagoriesHeader from './catagoriesHeader.js';
import SideBar from './sideBar.js';

const HomePage = () => {
    return (
    <React.Fragment>
        <CatagoriesHeader />
         {/*Add an advertisement component here */}
        <div className={`${styles.HomePageCard}`}>
            <SideBar />
            <Card className={`${styles.NewsPageCard}`}>
                
                <Card className={styles.MainContent}>
                    <img src={Image} alt="Newscoop" className={styles.NewsImage} />
                    <h1> Welcome to Newscoop sJVNJSvnavavjerioglaehhbe;n oehboetDLJbvk lsbvkBvbsbv bvsbdk f sviufsvfsiu </h1>
                </Card>
            
                <Card className={styles.MainContent}>
                    <img src={Image} alt="Newscoop" className={styles.NewsImage} />
                    <h1> Welcome to Newscoop</h1>
                 </Card>

                <Card className={styles.MainContent}>
                    <img src={Image} alt="Newscoop" className={styles.NewsImage} />
                    <h1> Welcome to Newscoop</h1>
                </Card>

                <Card className={styles.MainContent}>
                    <img src={Image} alt="Newscoop" className={styles.NewsImage} />
                    <h1> Welcome to Newscoop</h1>
                </Card>

                <Card className={styles.MainContent}>
                    <img src={Image} alt="Newscoop" className={styles.NewsImage} />
                    <h1> Welcome to Newscoop</h1>
                </Card>

                <Card className={styles.MainContent}>
                    <img src={Image} alt="Newscoop" className={styles.NewsImage} />
                    <h1> Welcome to Newscoop</h1>
                </Card>
            </Card>
        </div>
    </React.Fragment>
    );
}

export default HomePage;