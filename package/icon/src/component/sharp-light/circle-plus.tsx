
import { Icon } from "../../index";

/**
 * A component that renders the `circle-plus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-plus?s=sharp-light circle-plus}
 * @preview ![circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-plus.svg)
 */
const CirclePlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm16-352l-32 0 0 16 0 64-64 0-16 0 0 32 16 0 64 0 0 64 0 16 32 0 0-16 0-64 64 0 16 0 0-32-16 0-64 0 0-64 0-16z" />
    </Icon>
);

export default CirclePlus;