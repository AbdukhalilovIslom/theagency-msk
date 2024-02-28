import React from 'react'
import classes from "./styles.module.css"
import arrow from "../../../assets/icons/heroVector.svg"
import Image from 'next/image'
import Link from 'next/link'

interface BackButtonProps {
    href: string,
    text: string
}

export default function BackButton({ href, text }: BackButtonProps) {

    return (
        <Link href={href} className={classes.btn}>
            <Image src={arrow} alt="back" height={8} width={5} className={classes.arrow} />{text}
        </Link>
    )
}
