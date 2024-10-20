
import { Icon } from "../../index";

/**
 * A component that renders the `circle-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-xmark?s=sharp-light circle-xmark}
 * @preview ![circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-xmark.svg)
 */
const CircleXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM191.4 168.8l-22.6 22.6 11.3 11.3L233.4 256l-53.3 53.3-11.3 11.3 22.6 22.6 11.3-11.3L256 278.6l53.3 53.3 11.3 11.3 22.6-22.6-11.3-11.3L278.6 256l53.3-53.3 11.3-11.3-22.6-22.6-11.3 11.3L256 233.4l-53.3-53.3-11.3-11.3z" />
    </Icon>
);

export default CircleXmark;