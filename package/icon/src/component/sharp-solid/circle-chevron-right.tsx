
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-right?s=sharp-solid circle-chevron-right}
 * @preview ![circle-chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-chevron-right.svg)
 */
const CircleChevronRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm345 17L241 377l-17 17L190.1 360l17-17 87-87-87-87-17-17L224 118.1l17 17L345 239l17 17-17 17z" />
    </Icon>
);

export default CircleChevronRight;