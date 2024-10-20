
import { Icon } from "../../index";

/**
 * A component that renders the `circle-i` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-i?s=sharp-light circle-i}
 * @preview ![circle-i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-i.svg)
 */
const CircleI: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 128l-16 0 0 32 16 0 64 0 0 192-64 0-16 0 0 32 16 0 64 0 32 0 64 0 16 0 0-32-16 0-64 0 0-192 64 0 16 0 0-32-16 0-80 0-80 0z" />
    </Icon>
);

export default CircleI;