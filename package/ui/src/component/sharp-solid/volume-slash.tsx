
import { Icon } from "../../index";

/**
 * A component that renders the `volume-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-slash?s=sharp-solid volume-slash}
 * @preview ![volume-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/volume-slash.svg)
 */
const VolumeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38l19 14.7L591.5 497.2l19 14.7L639.9 474l-19-14.7-95.1-73.8C557 351.3 576 305.9 576 256c0-62.8-30.2-118.6-76.8-153.6l-28.8 38.4c35 26.3 57.6 68.1 57.6 115.2c0 38.8-15.3 74-40.3 99.9l-38.2-29.7C468.3 308.7 480 283.7 480 256c0-31.4-15.1-59.3-38.4-76.8l-28.8 38.4c11.7 8.8 19.2 22.7 19.2 38.4s-7.5 29.6-19.2 38.4l5.9 7.9L352 250.5 352 32l-48 0L195.2 128.7 48.4 14.8zM352 373.3L81.2 160 32 160l0 192 128 0L304 480l48 0 0-106.7z" />
    </Icon>
);

export default VolumeSlash;