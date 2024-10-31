
import { Icon } from "../../index";

/**
 * A component that renders the `circle-y` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-y?s=sharp-thin circle-y}
 * @preview ![circle-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-y.svg)
 */
const CircleY: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm-8-237.1L248 376l0 8 16 0 0-8 0-101.1L386.7 128l-20.8 0L256 259.5 146.1 128l-20.8 0L248 274.9z" />
    </Icon>
);

export default CircleY;