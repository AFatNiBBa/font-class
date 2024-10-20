
import { Icon } from "../../index";

/**
 * A component that renders the `circle-x` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-x?s=sharp-thin circle-x}
 * @preview ![circle-x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-x.svg)
 */
const CircleX: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM141.6 128L245.7 256 141.6 384l20.6 0L256 268.7 349.8 384l20.6 0L266.3 256 370.4 128l-20.6 0L256 243.3 162.2 128l-20.6 0z" />
    </Icon>
);

export default CircleX;