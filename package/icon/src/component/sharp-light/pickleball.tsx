
import { Icon } from "../../index";

/**
 * A component that renders the `pickleball` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pickleball?s=sharp-light pickleball}
 * @preview ![pickleball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pickleball.svg)
 */
const Pickleball: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M140.3 360.9l-13.7 13.7L61.3 440 88 466.7l65.4-65.4 13.7-13.7 18.5 5.8 90.9 28.4c3.3 13.4 8.2 26.2 14.6 38.1L176 424l-65.4 65.4L88 512 65.4 489.4 38.6 462.6 16 440l22.6-22.6L104 352 64 224 265.4 22.6 288 0l22.6 22.6L505.4 217.4 528 240l-9.5 9.5c-14.2-9.1-29.9-16.1-46.7-20.4L288 45.3l-142 142L283.5 324.3c-4.5 11.3-7.8 23.2-9.7 35.5l-150.4-150-23 23 34.2 109.5 5.8 18.5zM431.9 480.1a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-224a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm-64 128a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0-48a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm80 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm-64-64a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
    </Icon>
);

export default Pickleball;