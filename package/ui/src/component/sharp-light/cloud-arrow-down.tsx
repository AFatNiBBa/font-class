
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-arrow-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-arrow-down?s=sharp-light cloud-arrow-down}
 * @preview ![cloud-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cloud-arrow-down.svg)
 */
const CloudArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 241.1l0-9.1c0-57.4-46.6-104-104-104c-13.4 0-26.2 2.5-37.9 7.1l-24.3 9.5-14.2-22C340.8 87.3 301.1 64 256 64c-70.7 0-128 57.3-128 128l0 8.2 0 22.6-21.3 7.5C63.1 245.8 32 287.3 32 336l0 112 112 0 368 0 96 0 0-96c0-35.5-19.2-66.5-48-83.2l-16-9.2 0-18.5zM0 336c0-62.7 40.1-116 96-135.8l0-8.2c0-88.4 71.6-160 160-160c56.4 0 106 29.2 134.5 73.3c15.3-6 32-9.3 49.5-9.3c75.1 0 136 60.9 136 136l0 9.1c38.3 22.1 64 63.5 64 110.9l0 96 0 32-32 0-96 0-368 0L32 480 0 480l0-32L0 336zm228.7-36.7L217.4 288 240 265.4l11.3 11.3L304 329.4 304 176l0-16 32 0 0 16 0 153.4 52.7-52.7L400 265.4 422.6 288l-11.3 11.3-80 80L320 390.6l-11.3-11.3-80-80z" />
    </Icon>
);

export default CloudArrowDown;