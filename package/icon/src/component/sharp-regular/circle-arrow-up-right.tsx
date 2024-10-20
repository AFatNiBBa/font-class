
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-right?s=sharp-regular circle-arrow-up-right}
 * @preview ![circle-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-arrow-up-right.svg)
 */
const CircleArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm88 144l24 0 0 24 0 160 0 24-48 0 0-24 0-102.1L185 361l-17 17L134.1 344l17-17 135-135L192 192l-24 0 0-48 24 0 152 0z" />
    </Icon>
);

export default CircleArrowUpRight;