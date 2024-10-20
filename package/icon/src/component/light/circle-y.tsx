
import { Icon } from "../../index";

/**
 * A component that renders the `circle-y` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-y?s=light circle-y}
 * @preview ![circle-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-y.svg)
 */
const CircleY: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM156 149.5c-5.8-6.7-15.9-7.3-22.6-1.5s-7.3 15.9-1.5 22.6L240 294l0 90c0 8.8 7.2 16 16 16s16-7.2 16-16l0-90L380 170.5c5.8-6.7 5.1-16.8-1.5-22.6s-16.8-5.1-22.6 1.5L256 263.7 156 149.5z" />
    </Icon>
);

export default CircleY;