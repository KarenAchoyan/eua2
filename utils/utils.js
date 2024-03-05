import {useIntl} from "react-intl";
import React, {useEffect, useState} from "react";
import NProgress from "nprogress";
import Router from "next/router";
import styles from "../styles/header.module.css";
import 'nprogress/nprogress.css';

NProgress.configure({showSpinner: false});

export const Loader = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const start = () => {
            setLoading(true);
            NProgress.start();
        };

        const end = () => {
            setLoading(false);
            NProgress.done();
        };

        Router.events.on('routeChangeStart', start);
        Router.events.on('routeChangeComplete', end);
        Router.events.on('routeChangeError', end);

        return () => {
            Router.events.off('routeChangeStart', start);
            Router.events.off('routeChangeComplete', end);
            Router.events.off('routeChangeError', end);
        };
    }, []);

    return loading ? <div className={styles.loaderPage}><img src="/logo.png"/></div> : null;
};


export function truncateContent(content, maxLength) {
    if (content?.length <= maxLength) {
        return content;
    } else {
        // Truncate content and add "..." at the end
        return content?.substring(0, maxLength) + "...";
    }
}

export function isTruncContent(content, maxLength) {
    if (content.length <= maxLength) {
        return false;
    } else {
        // Truncate content and add "..." at the end
        return true
    }
}


export const languages = [
    {id: 1, name: "EN", fullName: "English", value: 'en', flag: "/english.webp"},
    {id: 2, name: "RU", fullName: "Russian", value: 'ru', flag: "/ru.png"},
    {id: 3, name: "Հայ", fullName: "Հայերեն", value: 'hy', flag: "/amFlag.png"},
];

export const regions = [
    {id:1, label_en:"Yerevan", label_ru:"Ереван", label:"Երևան", value:"Yerevan"},
    {id:2, label_en:"Kotayq", label_ru:"Котайк", label:"Կոտայք", value:"Kotayq"},
    {id:3, label_en:"Shirak", label_ru:"Ширак", label:"Շիրակ", value:"Shirak"},
    {id:4, label_en:"Lori", label_ru:"Лори", label:"Լոռի", value:"Lori"},
    {id:5, label_en:"Aragacotn", label_ru:"Арагацотн", label:"Արագածոտն", value:"Aragacotn"},
]

export function t(key) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const intl = useIntl();

    const title = intl.formatMessage({id: key})
    return title;
}


export const validateArmenianOrRussianPhoneNumber = (rule, value) => {
    const armenianPhoneRegex = /^\+374\d{2}\d{6}$/;
    const russianPhoneRegex = /^\+7\d{10}$/;
    if (!armenianPhoneRegex.test(value) && !russianPhoneRegex.test(value)) {
        return Promise.reject('Խնդրում ենք մուտքագրել ճիշտ համարակալման ձևաչափին');
    }
    return Promise.resolve();
};
