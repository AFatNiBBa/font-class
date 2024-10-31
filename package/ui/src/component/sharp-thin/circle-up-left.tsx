
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-left?s=sharp-thin circle-up-left}
 * @preview ![circle-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-up-left.svg)
 */
const CircleUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm60.7-332.7L328 168l-11.3-11.3L304 144l-144 0-16 0 0 16 0 144 12.7 12.7L168 328l11.3-11.3 25.4-25.4L216 280l11.3 11.3 73.4 73.4L312 376l11.3-11.3 41.4-41.4L376 312l-11.3-11.3-73.4-73.4L280 216l11.3-11.3 25.4-25.4zm-48 48L353.4 312 312 353.4l-84.7-84.7L216 257.4l-11.3 11.3L168 305.4l-8-8L160 160l137.4 0 8 8-36.7 36.7L257.4 216l11.3 11.3z" />
    </Icon>
);

export default CircleUpLeft;