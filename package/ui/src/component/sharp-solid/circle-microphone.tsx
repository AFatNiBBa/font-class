
import { Icon } from "../../index";

/**
 * A component that renders the `circle-microphone` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone?s=sharp-solid circle-microphone}
 * @preview ![circle-microphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-microphone.svg)
 */
const CircleMicrophone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 256l0-160 96 0 0 160c0 26.5-21.5 48-48 48s-48-21.5-48-48zm-48-32l0 16 0 16c0 53 43 96 96 96s96-43 96-96l0-16 0-16 32 0 0 16 0 16c0 65.3-48.9 119.1-112 127l0 17 0 16-32 0 0-16 0-17c-63.1-7.9-112-61.7-112-127l0-16 0-16 32 0z" />
    </Icon>
);

export default CircleMicrophone;