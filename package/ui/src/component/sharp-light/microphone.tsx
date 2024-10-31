
import { Icon } from "../../index";

/**
 * A component that renders the `microphone` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microphone?s=sharp-light microphone}
 * @preview ![microphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/microphone.svg)
 */
const Microphone: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 32l128 0 0 224c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-224zM96 0l0 32 0 224c0 53 43 96 96 96s96-43 96-96l0-224 0-32L256 0 128 0 96 0zM64 208l0-16-32 0 0 16 0 48c0 83 63.1 151.2 144 159.2l0 64.8-64 0-16 0 0 32 16 0 80 0 80 0 16 0 0-32-16 0-64 0 0-64.8c80.9-8 144-76.2 144-159.2l0-48 0-16-32 0 0 16 0 48c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-48z" />
    </Icon>
);

export default Microphone;