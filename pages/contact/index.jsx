import React from 'react';
import App from "../../components/layouts/app";
import styles from '../../styles/contact.module.css'
import {GlobalOutlined, PhoneOutlined, PushpinOutlined} from "@ant-design/icons";
const Index = () => {
    return (
        <div>
            <App>
               <div className={styles.container}>
                   <h1>Contact <span>Us</span></h1>
                   <div className={styles.row}>
                       <div className={styles.item}>
                           <span>
                               <PushpinOutlined />
                           </span>
                           <h3>Address</h3>
                           <p>10 Davit Anhaght str., Yerevan, Armenia</p>
                       </div>
                       <div className={styles.item}>
                           <span>
                               <PhoneOutlined />
                           </span>
                           <h3>CONTACT INFO:</h3>
                           <p>(010) 240038</p>
                       </div>
                       <div className={styles.item}>
                           <span>
                               <GlobalOutlined />
                           </span>
                           <h3>WEBSITE</h3>
                           <p>www.eua.am</p>
                       </div>
                   </div>
                   <iframe
                       className={styles.map}
                       src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12189.109233114628!2d44.529795!3d40.202894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd2d0aa3ba83%3A0xc3dc185e21b115db!2z1YDVodW11aHVvdW_1aHVttWrINWl1b7WgNW41brVodWv1aHVtiDVsNWh1bTVodWs1b3VodaA1aHVtg!5e0!3m2!1shy!2sam!4v1709631124865!5m2!1shy!2sam"
                       />
               </div>
            </App>
        </div>
    );
};

export default Index;