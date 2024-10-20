
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-left?s=regular circle-arrow-up-left}
 * @preview ![circle-arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-arrow-up-left.svg)
 */
const CircleArrowUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm64-368l-152 0c-13.3 0-24 10.7-24 24l0 160c0 13.3 10.7 24 24 24s24-10.7 24-24l0-102.1L327 361c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-135-135 94.1 0c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
    </Icon>
);

export default CircleArrowUpLeft;