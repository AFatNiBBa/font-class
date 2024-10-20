
import { Icon } from "../../index";

/**
 * A component that renders the `circle-microphone` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone?s=regular circle-microphone}
 * @preview ![circle-microphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-microphone.svg)
 */
const CircleMicrophone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM208 144c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-112zm-56 88c13.3 0 24 10.7 24 24c0 44.2 35.8 80 80 80s80-35.8 80-80c0-13.3 10.7-24 24-24s24 10.7 24 24c0 62.5-44.8 114.5-104 125.8l0 10.2c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-10.2C172.8 370.5 128 318.5 128 256c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default CircleMicrophone;