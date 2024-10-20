
import { Icon } from "../../index";

/**
 * A component that renders the `circle-x` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-x?s=light circle-x}
 * @preview ![circle-x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-x.svg)
 */
const CircleX: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM172.1 133.6c-5.8-6.7-15.9-7.5-22.6-1.7s-7.5 15.9-1.7 22.6L234.9 256 147.9 357.6c-5.8 6.7-5 16.8 1.7 22.6s16.8 5 22.6-1.7L256 280.6l83.9 97.8c5.8 6.7 15.8 7.5 22.6 1.7s7.5-15.8 1.7-22.6L277.1 256l87.1-101.6c5.8-6.7 5-16.8-1.7-22.6s-16.8-5-22.6 1.7L256 231.4l-83.9-97.8z" />
    </Icon>
);

export default CircleX;