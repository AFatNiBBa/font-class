
import { Icon } from "../../index";

/**
 * A component that renders the `circle-microphone` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone?s=sharp-regular circle-microphone}
 * @preview ![circle-microphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-microphone.svg)
 */
const CircleMicrophone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm208 0l0-160 96 0 0 160c0 26.5-21.5 48-48 48s-48-21.5-48-48zm-32-24l0 24c0 44.2 35.8 80 80 80s80-35.8 80-80l0-24 48 0 0 24c0 62.5-44.8 114.5-104 125.8l0 10.2 0 24-48 0 0-24 0-10.2C172.8 370.5 128 318.5 128 256l0-24 48 0z" />
    </Icon>
);

export default CircleMicrophone;