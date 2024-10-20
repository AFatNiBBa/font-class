
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-down-left` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down-left?s=solid circle-arrow-down-left}
 * @preview ![circle-arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-arrow-down-left.svg)
 */
const CircleArrowDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512zm64-144c13.3 0 24-10.7 24-24s-10.7-24-24-24l-94.1 0L361 185c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-135 135L192 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 160c0 13.3 10.7 24 24 24l152 0z" />
    </Icon>
);

export default CircleArrowDownLeft;