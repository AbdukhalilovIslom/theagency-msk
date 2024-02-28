import React from 'react'
import classes from "./styles.module.css"
import Consultation from '@/Components/common/consultation/consultation'
import Container from '@/layout/container/container'
import Link from 'next/link'
import arrow from "../../../../../assets/icons/heroVector.svg"
import shape from "../../../../../assets/icons/back-shape.png"
import product from "../../../../../assets/images/categoryView.png"
import Image from 'next/image'

export default function page({ params: { lng, item } }: { params: { lng: string, item: string } }) {

    return (
        <section className={classes.category_product}>
            <Container className={classes.category_product_wrapper}>
                <Image src={shape} alt='shape' width={782} height={458} className={classes.shape} />
                <div className={classes.back_btn}>
                    <Link href="/catalog" className={classes.back_button}>
                        <Image src={arrow} alt="arrow" height={8} width={5} className={classes.arrow} /> назад в каталог
                    </Link>
                </div>
                <h2 className={classes.title}>Грозозащитный оцинкованный канат <br /> ГОСТ 3063-80</h2>
                <div className={classes.body}>
                    <div className={classes.body_left}>
                        <Image src={product} alt='product' height={250} width={500} className={classes.product_image} />
                        <div>
                            Канат стальной ГОСТ 3063-80 представляет собой канат одинарной свивки тип ТК конструкции 1 х 19 (1+6+12)  (без сердечника). По данным ГОСТа, он распространяется на стальные канаты одинарной свивки с точечным касанием проволок в прядях тип ТК без сердечника.
                            <br /> <br />
                            Данный вид канатов в основном применяется для систем грозозащиты, заземления, как канаты (тросы) используемые для растяжек.
                            <br /> <br />
                            Для удобочитаемости характеристик каната обозначенных на бирках барабанов (упаковки стальных канатов)  и сертификатов, ниже приведена расшифровка основных обозначений канатов (тросов), которая является одинаковой практически для всех канатов, изготавливаемых по ГОСТам. </div>
                    </div>
                    <div className={classes.body_right}>
                        <b> Канаты разделяются по признакам:</b>
                        <br /> <br />
                        по назначению на:<br />
                        ·        грузовой (Г)
                        <br /> <br />
                        по механическим свойствам проволоки, а именно:<br />
                        ·        высшая марка проволоки (В)<br />
                        ·        первая марка проволоки (1)
                        <br /> <br />
                        по типу покрытия проволок:<br />
                        ·        без покрытия (не обозначается)<br />
                        ·        обычное оцинкование (С)<br />
                        ·        глубокое оцинкование (Ж или ОЖ)
                        <br /> <br />
                        по направлению свивки каната:<br />
                        ·        правая (не обозначается)<br />
                        ·        левая (Л)
                        <br /> <br />
                        по способу свивки:<br />
                        ·        нераскручивающийся (Н)<br />
                        ·        раскручивающийся (не обозначается
                        <br /> <br />
                        по степени уравновешивания:<br />
                        ·        рихтованные (Р)<br />
                        ·        нерихтованные (не обозначается)
                    </div>
                </div>
                <div className={classes.bottom}>
                    Далее, в аббревиатуре стальных канатов указывается маркировочная группа проволоки (ниже в таблице) приведены характеристики стальных канатов для маркировочной группы 1770 (180) дополнительно в таблицу сведены справочные (ориентировочные) данные о весе 1000м каната.
                </div>
            </Container>
            <Consultation lng={lng} />
        </section>
    )
}
