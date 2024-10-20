
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-right?s=sharp-thin circle-up-right}
 * @preview ![circle-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-up-right.svg)
 */
const CircleUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM195.3 179.3L184 168l11.3-11.3L208 144l144 0 16 0 0 16 0 144-12.7 12.7L344 328l-11.3-11.3-25.4-25.4L296 280l-11.3 11.3-73.4 73.4L200 376l-11.3-11.3-41.4-41.4L136 312l11.3-11.3 73.4-73.4L232 216l-11.3-11.3-25.4-25.4zm48 48L158.6 312 200 353.4l84.7-84.7L296 257.4l11.3 11.3L344 305.4l8-8L352 160l-137.4 0-8 8 36.7 36.7L254.6 216l-11.3 11.3z" />
    </Icon>
);

export default CircleUpRight;