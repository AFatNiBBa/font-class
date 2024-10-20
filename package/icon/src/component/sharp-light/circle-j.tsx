
import { Icon } from "../../index";

/**
 * A component that renders the `circle-j` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-j?s=sharp-light circle-j}
 * @preview ![circle-j](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-j.svg)
 */
const CircleJ: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm80-368l0-16-32 0 0 16 0 144c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-16 0-16-32 0 0 16 0 16c0 53 43 96 96 96s96-43 96-96l0-144z" />
    </Icon>
);

export default CircleJ;