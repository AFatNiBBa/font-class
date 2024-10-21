
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-up?s=sharp-solid circle-chevron-up}
 * @preview ![circle-chevron-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-chevron-up.svg)
 */
const CircleChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm17-345L377 271l17 17L360 321.9l-17-17-87-87-87 87-17 17L118.1 288l17-17L239 167l17-17 17 17z" />
    </Icon>
);

export default CircleChevronUp;