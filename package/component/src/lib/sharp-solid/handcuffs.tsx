
import { Icon } from "../../index";

/**
 * A component that renders the `handcuffs` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/handcuffs?s=sharp-solid handcuffs}
 * @preview ![handcuffs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/handcuffs.svg)
 */
const Handcuffs: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M234.9 14L298 2.9l11.1 63L246 77.1 234.9 14zM96 160l34.7 0L160 130.7 189.3 160l34.7 0 0 45.3c56.5 24.7 96 81.1 96 146.7c0 88.4-71.6 160-160 160S0 440.4 0 352c0-65.6 39.5-122 96-146.7L96 160zm64 288a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm192-96c0-25.9-5.1-50.5-14.4-73.1c16.8-32.7 44.5-58.8 78.4-73.6l0-45.3 34.7 0L480 130.7 509.3 160l34.7 0 0 45.3c56.5 24.7 96 81.1 96 146.7c0 88.4-71.6 160-160 160c-62 0-115.8-35.3-142.4-86.9c9.3-22.5 14.4-47.2 14.4-73.1zm224 0a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM201.4 43.7l34.9 53.7-53.7 34.9L147.7 78.6l53.7-34.9zm237.2 0l53.7 34.9-34.9 53.7L403.7 97.4l34.9-53.7zM405.1 14L394 77.1 330.9 66 342 2.9l63 11.1z" />
    </Icon>
);

export default Handcuffs;