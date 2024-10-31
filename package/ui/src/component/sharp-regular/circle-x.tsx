
import { Icon } from "../../index";

/**
 * A component that renders the `circle-x` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-x?s=sharp-regular circle-x}
 * @preview ![circle-x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-x.svg)
 */
const CircleX: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM381.1 128l-59.8 0L256 215.8 190.7 128l-59.8 0 95.2 128L130.9 384l59.8 0L256 296.2 321.3 384l59.8 0L285.9 256l95.2-128z" />
    </Icon>
);

export default CircleX;