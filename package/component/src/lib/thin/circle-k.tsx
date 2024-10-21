
import { Icon } from "../../index";

/**
 * A component that renders the `circle-k` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-k?s=thin circle-k}
 * @preview ![circle-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-k.svg)
 */
const CircleK: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm93.4-370.1c3.2-3 3.4-8.1 .5-11.3s-8.1-3.4-11.3-.5L176 280.2 176 136c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 162.5 0 77.5c0 4.4 3.6 8 8 8s8-3.6 8-8l0-74 59.4-54.8L337.6 380.9c2.7 3.5 7.7 4.2 11.2 1.5s4.2-7.7 1.5-11.2L247.2 236.3l102.2-94.4z" />
    </Icon>
);

export default CircleK;