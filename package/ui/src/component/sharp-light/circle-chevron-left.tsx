
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-left?s=sharp-light circle-chevron-left}
 * @preview ![circle-chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-chevron-left.svg)
 */
const CircleChevronLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 1 448 0A224 224 0 1 1 32 256zm480 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM164.7 244.7L153.4 256l11.3 11.3 112 112L288 390.6 310.6 368l-11.3-11.3L198.6 256 299.3 155.3 310.6 144 288 121.4l-11.3 11.3-112 112z" />
    </Icon>
);

export default CircleChevronLeft;