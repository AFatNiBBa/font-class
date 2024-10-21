
import { Icon } from "../../index";

/**
 * A component that renders the `circle-microphone` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone?s=sharp-light circle-microphone}
 * @preview ![circle-microphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-microphone.svg)
 */
const CircleMicrophone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM192 96l16 0 96 0 16 0 0 16 0 144c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-144 0-16zm32 32l0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128-64 0zm-64 96l0 16 0 16c0 53 43 96 96 96s96-43 96-96l0-16 0-16 32 0 0 16 0 16c0 65.3-48.9 119.1-112 127l0 17 0 16-32 0 0-16 0-17c-63.1-7.9-112-61.7-112-127l0-16 0-16 32 0z" />
    </Icon>
);

export default CircleMicrophone;