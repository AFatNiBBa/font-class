
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-right?s=sharp-solid circle-arrow-up-right}
 * @preview ![circle-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-arrow-up-right.svg)
 */
const CircleArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm88 144l-152 0-24 0 0 48 24 0 94.1 0L151 327l-17 17L168 377.9l17-17 135-135L320 328l0 24 48 0 0-24 0-160 0-24-24 0z" />
    </Icon>
);

export default CircleArrowUpRight;