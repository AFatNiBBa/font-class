
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down-right?s=sharp-thin circle-down-right}
 * @preview ![circle-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-down-right.svg)
 */
const CircleDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496a240 240 0 1 1 0-480 240 240 0 1 1 0 480zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM195.3 332.7L184 344l11.3 11.3L208 368l144 0 16 0 0-16 0-144-12.7-12.7L344 184l-11.3 11.3-25.4 25.4L296 232l-11.3-11.3-73.4-73.4L200 136l-11.3 11.3-41.4 41.4L136 200l11.3 11.3 73.4 73.4L232 296l-11.3 11.3-25.4 25.4zm48-48L158.6 200 200 158.6l84.7 84.7L296 254.6l11.3-11.3L344 206.6l8 8L352 352l-137.4 0-8-8 36.7-36.7L254.6 296l-11.3-11.3z" />
    </Icon>
);

export default CircleDownRight;