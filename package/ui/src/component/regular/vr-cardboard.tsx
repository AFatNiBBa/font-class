
import { Icon } from "../../index";

/**
 * A component that renders the `vr-cardboard` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vr-cardboard?s=regular vr-cardboard}
 * @preview ![vr-cardboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/vr-cardboard.svg)
 */
const VrCardboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M560 112L80 112c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32l110.6 0c12.1 0 23.2-6.8 28.6-17.7l34.7-69.5C266.4 287.8 292 272 320 272s53.6 15.8 66.1 40.8l34.7 69.5c5.4 10.8 16.5 17.7 28.6 17.7L560 400c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32zM80 64l480 0c44.2 0 80 35.8 80 80l0 224c0 44.2-35.8 80-80 80l-110.6 0c-30.3 0-58-17.1-71.6-44.2l-34.7-69.5c-4.4-8.8-13.4-14.3-23.2-14.3s-18.8 5.5-23.2 14.3l-34.7 69.5c-13.6 27.1-41.3 44.2-71.6 44.2L80 448c-44.2 0-80-35.8-80-80L0 144C0 99.8 35.8 64 80 64zM96 240a64 64 0 1 1 128 0A64 64 0 1 1 96 240zm384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default VrCardboard;