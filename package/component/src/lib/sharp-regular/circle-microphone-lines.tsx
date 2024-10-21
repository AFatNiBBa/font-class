
import { Icon } from "../../index";

/**
 * A component that renders the `circle-microphone-lines` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone-lines?s=sharp-regular circle-microphone-lines}
 * @preview ![circle-microphone-lines](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-microphone-lines.svg)
 */
const CircleMicrophoneLines: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 96l0 160c0 26.5 21.5 48 48 48s48-21.5 48-48l-24 0-16 0 0-32 16 0 24 0 0-32-24 0-16 0 0-32 16 0 24 0 0-64-96 0zM176 256l0-24-48 0 0 24c0 62.5 44.8 114.5 104 125.8l0 10.2 0 24 48 0 0-24 0-10.2c59.2-11.2 104-63.3 104-125.8l0-24-48 0 0 24c0 44.2-35.8 80-80 80s-80-35.8-80-80z" />
    </Icon>
);

export default CircleMicrophoneLines;