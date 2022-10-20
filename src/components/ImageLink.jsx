import React from "react";
import "../Styles/styles";
import Image from "./Image";

export default (props) => {
    return (
        <a aria-label={props.ariaLabel} href={props.href}>
            <Image class={props.class} src={props.src} altText={props.altText} />
        </a>
    )
}