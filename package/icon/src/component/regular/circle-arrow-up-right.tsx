
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-right?s=regular circle-arrow-up-right}
 * @preview ![circle-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-arrow-up-right.svg)
 */
const CircleArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM192 144l152 0c13.3 0 24 10.7 24 24l0 160c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-102.1L185 361c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l135-135L192 192c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default CircleArrowUpRight;