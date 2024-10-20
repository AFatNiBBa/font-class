
import { Icon } from "../../index";

/**
 * A component that renders the `circle-plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-plus?s=sharp-thin circle-plus}
 * @preview ![circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-plus.svg)
 */
const CirclePlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm8-352l-16 0 0 8 0 80-80 0-8 0 0 16 8 0 80 0 0 80 0 8 16 0 0-8 0-80 80 0 8 0 0-16-8 0-80 0 0-80 0-8z" />
    </Icon>
);

export default CirclePlus;