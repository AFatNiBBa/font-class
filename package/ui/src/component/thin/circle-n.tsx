
import { Icon } from "../../index";

/**
 * A component that renders the `circle-n` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-n?s=thin circle-n}
 * @preview ![circle-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-n.svg)
 */
const CircleN: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM158 130.8c-2.2-2.5-5.7-3.4-8.8-2.3s-5.2 4.2-5.2 7.5l0 240c0 4.4 3.6 8 8 8s8-3.6 8-8l0-218.6L354 381.2c2.2 2.5 5.7 3.4 8.8 2.3s5.2-4.2 5.2-7.5l0-240c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 218.6L158 130.8z" />
    </Icon>
);

export default CircleN;