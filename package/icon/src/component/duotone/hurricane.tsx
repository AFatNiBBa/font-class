
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hurricane` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hurricane?s=duotone hurricane}
 * @preview ![hurricane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hurricane.svg)
 */
const Hurricane: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 208C0 312.4 77 398.9 177.3 413.7c8.3 1.2 14.7 8.1 14.7 16.5l0 63.3c0 9.3 8 16.7 17.1 15.2C308.3 492.9 384 407 384 303.4C384 199 307 112.5 206.7 97.6c-8.3-1.2-14.7-8.1-14.7-16.5l0-63.3c0-9.3-8-16.7-17.1-15.2C75.7 18.5 0 104.4 0 208zm288 48A96 96 0 1 1 96 256a96 96 0 1 1 192 0z" />
        <path d="M192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Hurricane;