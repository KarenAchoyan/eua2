import React, {useState} from 'react';
import styles from "../../styles/layout.module.css"
import Drb from "./drb/drb";
import Image from "next/image";

const App = ({children}) => {
    const [menus, setMenus] = useState([
        {id: 1, name: "Home", subs: []},
        {
            id: 1, name: "Alumni", subs: [
                {
                    id: 1, name: "Ռեկտոր", subs: [
                        {id: 1, name: "Հայտարարություններ"},
                        {id: 2, name: "Հայտարարություններ"},
                        {id: 3, name: "Հայտարարություններ"},
                        {id: 4, name: "Հայտարարություններ"},
                    ]
                },
                {
                    id: 2, name: "Ռեկտոր", subs: []
                },
            ]
        },
        {id: 1, name: "Applicant", subs: []},
        {id: 1, name: "Education", subs: []},
        {id: 1, name: "Science", subs: []},
        {id: 1, name: "Alumni", subs: []},

        {id: 1, name: "Media", subs: []},
        {
            id: 2, name: "About", subs: [
                {
                    id: 1, name: "Ռեկտոր", subs: [
                        {id: 1, name: "Հայտարարություններ"},
                        {id: 2, name: "Հայտարարություններ"},
                        {id: 3, name: "Հայտարարություններ"},
                        {id: 4, name: "Հայտարարություններ"},
                    ]
                },
                {
                    id: 2, name: "Ռեկտոր", subs: []
                },
            ]
        },
    ])
    return (
        <>
            <header>
                <div className={styles.headerTop}>
                    <div className={styles.row}>
                        <div>
                            <ul>
                                <li>Հասցե. 10 Davit Anhaght str., Yerevan, Armenia</li>
                                <li>Հեռախոսահամար․(010) 240038</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                {/*<li><FacebookOutlined /></li>*/}
                                {/*<li><GooglePlusOutlined /></li>*/}
                                {/*<li><TwitterOutlined /></li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.headerBottom}>
                    <div className={styles.container}>
                        <div className={styles.logo}>
                            <Image width={150} height={50} src="/logo.png" alt=""/>
                        </div>
                        <div className={styles.menu}>
                            <ul>
                                {menus.map((item, index) => (
                                    <li key={index}>{item.name}
                                        {item?.subs?.length > 0 ? <Drb subs={item.subs}/> : null}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer className={styles.footer}>
                <div className={styles.footerTop}>
                    <div className={styles.containerFooter}>
                        <div className={styles.social}>
                            <div className={styles.round}>
                                {/*<FacebookOutlined />*/}
                            </div>
                            <div className={styles.round}>
                                {/*<InstagramOutlined />*/}
                            </div>
                        </div>
                        <div className={styles.info}>
                            <ul>
                                <li>Ֆակուլտետներ</li>
                                <li>Գլխավոր</li>
                                <li>Կապ մեզ հետ</li>
                                <li>Նորություններ</li>
                            </ul>
                            <ul>
                                <li>ԷՋԵՐ</li>
                                <li>Գլխավոր</li>
                                <li>Կապ մեզ հետ</li>
                                <li>Նորություններ</li>
                            </ul>
                            <ul>
                                <li>ՀԵՏԱԴԱՐՁ ԿԱՊ</li>
                                <li>Հասցե: 10 Davit Anhaght str., Yerevan, Armenia</li>
                                <li>Հեռախոսահամար: (010) 240038</li>
                                <li>Էլ-հասցե: info@eua.am</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>Կայքը ստեղծվել է GeekLab ընկերության կողմից</p>
                </div>
            </footer>
        </>
    );
};

export default App;