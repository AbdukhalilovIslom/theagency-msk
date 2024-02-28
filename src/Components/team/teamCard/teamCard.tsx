import React from 'react'
import classes from "./styles.module.css"
import Image from 'next/image'

export default function TeamCard({ ...props }) {
    const { role, name, img } = props.item

    return (
        <div className={classes.member}>
            <Image src={img} alt="member" height={350} width={270} className={classes.member_image} />
            <div className={classes.member_info}>
                <p className={classes.member_role}>{role}</p>
                <div className={classes.member_hr}></div>
                <p className={classes.member_name}>{name}</p>
            </div>
        </div>
    )
}
