
import { Icon } from "../../index";

/**
 * A component that renders the `fire-extinguisher` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-extinguisher?s=sharp-light fire-extinguisher}
 * @preview ![fire-extinguisher](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/fire-extinguisher.svg)
 */
const FireExtinguisher: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 0l0 64C104.5 64 55.6 92.3 27 135.1c-7.3 11-13.4 22.9-17.8 35.6l30.2 10.7c3.6-10.1 8.4-19.7 14.3-28.4C76.5 118.6 115.6 96 160 96l0 33.1c-54.3 7.8-96 54.4-96 110.9l0 240 0 32 32 0 160 0 32 0 0-32 0-240c0-56.4-41.7-103.1-96-110.9L192 96l96 0 0 32 192 27.4 32 4.6 0-32.3 0-95.4L512 0 480 4.6 288 32l0 32-96 0 0-64L160 0zM320 100.2l0-40.5L480 36.9l0 86.2L320 100.2zM256 384L96 384l0-144c0-44.2 35.8-80 80-80s80 35.8 80 80l0 144zM96 416l160 0 0 64L96 480l0-64z" />
    </Icon>
);

export default FireExtinguisher;