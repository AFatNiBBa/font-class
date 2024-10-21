
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-up?s=sharp-regular circle-chevron-up}
 * @preview ![circle-chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-chevron-up.svg)
 */
const CircleChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm17-345l-17-17-17 17L135 271l-17 17L152 321.9l17-17 87-87 87 87 17 17L393.9 288l-17-17L273 167z" />
    </Icon>
);

export default CircleChevronUp;