
import { Icon } from "../../index";

/**
 * A component that renders the `circle-n` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-n?s=sharp-thin circle-n}
 * @preview ![circle-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-n.svg)
 */
const CircleN: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM144 128l0 8 0 240 0 8 16 0 0-8 0-218.6L354 381.2l2.4 2.8 11.7 0 0-8 0-240 0-8-16 0 0 8 0 218.6L158 130.8l-2.4-2.8L144 128z" />
    </Icon>
);

export default CircleN;