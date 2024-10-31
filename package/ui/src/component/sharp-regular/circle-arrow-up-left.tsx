
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-left?s=sharp-regular circle-arrow-up-left}
 * @preview ![circle-arrow-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-arrow-up-left.svg)
 */
const CircleArrowUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM168 144l-24 0 0 24 0 160 0 24 48 0 0-24 0-102.1L327 361l17 17L377.9 344l-17-17-135-135 94.1 0 24 0 0-48-24 0-152 0z" />
    </Icon>
);

export default CircleArrowUpLeft;