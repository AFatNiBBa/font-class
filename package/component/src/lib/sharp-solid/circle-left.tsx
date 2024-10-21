
import { Icon } from "../../index";

/**
 * A component that renders the `circle-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-left?s=sharp-solid circle-left}
 * @preview ![circle-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-left.svg)
 */
const CircleLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM256 128l0 80 128 0 0 96-128 0 0 80-16 0L112 256 240 128l16 0z" />
    </Icon>
);

export default CircleLeft;