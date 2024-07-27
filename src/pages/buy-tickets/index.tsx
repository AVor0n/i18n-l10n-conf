import classNames from "classnames/bind";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import { Button } from "@/components/button";
import { HorizontalDivider } from "@/components/horizontal-divider";
import { PageHeader } from "@/components/page-header";
import { Ticket } from "@/components/ticket";

import styles from "./styles.module.css";

const cx = classNames.bind(styles);

export const BuyTicketsPage: NextPage = () => {
    const [selectedPrice, setSelectedPrice] = useState(2500);
    const [ticketCount, setTicketCount] = useState(1);

    const totalPrice = selectedPrice * ticketCount;

    return (
        <>
            <Head>
                <title>Купить билеты - I&L–2024</title>
            </Head>

            <PageHeader title="Купить билеты" />

            <form className={cx("form")}>
                <HorizontalDivider />

                <fieldset className={cx("form__tickets")}>
                    <div className={cx("form__label")}>Выберите тип билета</div>
                    <div className={cx("form__tickets-wrapper")}>
                        <Ticket
                            id="ticket-default"
                            title={
                                <>
                                    Входной билет <br /> 2 500,00 ₽
                                </>
                            }
                            price={2500}
                            description="Простой входной билет предоставляет доступ на мероприятие и является вашим пропуском на конференцию"
                            defaultChecked
                            onChange={setSelectedPrice}
                        />

                        <Ticket
                            vip
                            id="ticket-default"
                            title={
                                <>
                                    VIP посещение <br /> 15 000,00 ₽
                                </>
                            }
                            price={15000}
                            description="Получите дополнительный доступ к закрытым дискуссиям, личным встречам с ведущими экспертами"
                            onChange={setSelectedPrice}
                        />
                    </div>
                </fieldset>

                <fieldset className={cx("form__inputs")}>
                    <label className={cx("form__inputs-label")}>
                        <div className={cx("form__label")}>Имя и фамилия</div>
                        <input
                            className={cx("form__input")}
                            type="text"
                            placeholder="Введите имя и фамилию"
                        />
                    </label>

                    <label className={cx("form__inputs-label")}>
                        <div className={cx("form__label")}>Электронная почта</div>
                        <input
                            className={cx("form__input")}
                            type="email"
                            placeholder="example@example.com"
                        />
                    </label>

                    <label className={cx("form__inputs-label")}>
                        <div className={cx("form__label")}>Номер телефона</div>
                        <input className={cx("form__input", "form__input_phone")} type="tel" />
                    </label>

                    <div className={cx("form__inputs-label")}>
                        <div className={cx("form__label")}>Количество билетов</div>
                        <div>
                            {[1, 2, 3, 4, 5, 6].map((count) => (
                                <div className={cx("form__tickets-count")} key={count}>
                                    <input
                                        className={cx("form__tickets-count-input")}
                                        type="radio"
                                        name="tickets"
                                        id={`tickets_${count}`}
                                        checked={count === ticketCount}
                                        onChange={() => setTicketCount(count)}
                                    />
                                    <label htmlFor={`tickets_${count}`}>{count}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </fieldset>

                <div className={cx("form__submit")}>
                    <Button type="button">Оплатить {totalPrice} ₽</Button>
                    <div className={cx("form__submit-description")}>
                        Нажимая «Оплатить», вы соглашаетесь с условиями приобретения и офертой
                    </div>
                </div>
            </form>
        </>
    );
};
