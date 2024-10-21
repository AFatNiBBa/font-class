
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-right?s=sharp-light circle-arrow-right}
 * @preview ![circle-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-arrow-right.svg)
 */
const CircleArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm379.3 11.3L390.6 256l-11.3-11.3-96-96L272 137.4 249.4 160l11.3 11.3L329.4 240 144 240l-16 0 0 32 16 0 185.4 0-68.7 68.7L249.4 352 272 374.6l11.3-11.3 96-96z" />
    </Icon>
);

export default CircleArrowRight;