
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-right` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-right?s=solid circle-arrow-up-right}
 * @preview ![circle-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-arrow-up-right.svg)
 */
const CircleArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm368 64c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-94.1L185 361c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l135-135L184 192c-13.3 0-24-10.7-24-24s10.7-24 24-24l160 0c13.3 0 24 10.7 24 24l0 152z" />
    </Icon>
);

export default CircleArrowUpRight;