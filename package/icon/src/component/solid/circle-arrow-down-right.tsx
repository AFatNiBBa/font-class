
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-down-right` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down-right?s=solid circle-arrow-down-right}
 * @preview ![circle-arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-arrow-down-right.svg)
 */
const CircleArrowDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM192 368c-13.3 0-24-10.7-24-24s10.7-24 24-24l94.1 0L151 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l135 135L320 184c0-13.3 10.7-24 24-24s24 10.7 24 24l0 160c0 13.3-10.7 24-24 24l-152 0z" />
    </Icon>
);

export default CircleArrowDownRight;