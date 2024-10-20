
import { Icon } from "../../index";

/**
 * A component that renders the `circle-x` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-x?s=sharp-light circle-x}
 * @preview ![circle-x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-x.svg)
 */
const CircleX: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM141 128l95.1 128L141 384l39.9 0L256 282.8 331.2 384l39.9 0L275.9 256 371 128l-39.9 0L256 229.2 180.8 128 141 128z" />
    </Icon>
);

export default CircleX;