
import { Icon } from "../../index";

/**
 * A component that renders the `circle-dot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dot?s=sharp-solid circle-dot}
 * @preview ![circle-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-dot.svg)
 */
const CircleDot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default CircleDot;