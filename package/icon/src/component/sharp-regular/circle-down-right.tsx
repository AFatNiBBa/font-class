
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down-right?s=sharp-regular circle-down-right}
 * @preview ![circle-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-down-right.svg)
 */
const CircleDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zm96 192l-24-24-52 52-76-76-56 56 76 76-52 52 24 24 160 0 0-160z" />
    </Icon>
);

export default CircleDownRight;