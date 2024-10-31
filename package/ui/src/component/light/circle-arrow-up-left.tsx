
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-left?s=light circle-arrow-up-left}
 * @preview ![circle-arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-arrow-up-left.svg)
 */
const CircleArrowUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm56-352l-136 0c-8.8 0-16 7.2-16 16l0 144c0 8.8 7.2 16 16 16s16-7.2 16-16l0-105.4L324.7 347.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 192l97.4 0c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
    </Icon>
);

export default CircleArrowUpLeft;