
import { Icon } from "../../index";

/**
 * A component that renders the `honey-pot` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/honey-pot?s=sharp-regular honey-pot}
 * @preview ![honey-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/honey-pot.svg)
 */
const HoneyPot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 224c0 176-128 256-128 256l-192 0s-128-80-128-256C0 166.7 25.1 115.2 65 80l-9 0L32 80l0-48 24 0 72 0 48 0 16 0 64 0 136 0 24 0 0 48-24 0-9 0c39.9 35.2 65 86.7 65 144zM48 224l352 0c0-79.5-64.5-144-144-144l-64 0c-5.4 0-10.7 .3-16 .9l0 55.1 0 24-48 0 0-24 0-41c-47.4 23.6-80 72.5-80 129zM78.6 352c7.4 14 15.5 26.3 23.6 36.9c13.6 17.8 27.1 30.9 37 39.3c1.6 1.4 3.1 2.6 4.5 3.7l160.6 0c1.4-1.1 2.9-2.4 4.5-3.7c9.9-8.5 23.4-21.5 37-39.3c8.1-10.6 16.2-22.9 23.6-36.9L78.6 352z" />
    </Icon>
);

export default HoneyPot;