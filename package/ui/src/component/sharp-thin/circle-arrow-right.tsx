
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-right?s=sharp-thin circle-arrow-right}
 * @preview ![circle-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-arrow-right.svg)
 */
const CircleArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 1 16 256a240 240 0 1 1 480 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm381.7 5.7l5.7-5.7-5.7-5.7-104-104-5.7-5.7L260.7 152l5.7 5.7L356.7 248 136 248l-8 0 0 16 8 0 220.7 0-90.3 90.3-5.7 5.7L272 371.3l5.7-5.7 104-104z" />
    </Icon>
);

export default CircleArrowRight;