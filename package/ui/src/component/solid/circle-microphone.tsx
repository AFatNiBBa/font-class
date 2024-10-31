
import { Icon } from "../../index";

/**
 * A component that renders the `circle-microphone` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone?s=solid circle-microphone}
 * @preview ![circle-microphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-microphone.svg)
 */
const CircleMicrophone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 144c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-112zm-64 80c8.8 0 16 7.2 16 16l0 16c0 53 43 96 96 96s96-43 96-96l0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16c0 65.3-48.9 119.1-112 127l0 17c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-17c-63.1-7.9-112-61.7-112-127l0-16c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default CircleMicrophone;