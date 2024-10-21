
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-down-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down-left?s=sharp-solid circle-arrow-down-left}
 * @preview ![circle-arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-arrow-down-left.svg)
 */
const CircleArrowDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM168 368l152 0 24 0 0-48-24 0-94.1 0L361 185l17-17L344 134.1l-17 17-135 135L192 184l0-24-48 0 0 24 0 160 0 24 24 0z" />
    </Icon>
);

export default CircleArrowDownLeft;