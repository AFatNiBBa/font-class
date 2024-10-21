
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down-left?s=sharp-light circle-down-left}
 * @preview ![circle-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-down-left.svg)
 */
const CircleDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448zm0 480A256 256 0 1 1 256 0a256 256 0 1 1 0 512zM160 368l-16 0 0-16 0-160 0-6.6 4.7-4.7 16-16L176 153.4l11.3 11.3L228 205.4l64.7-64.7L304 129.4l11.3 11.3 56 56L382.6 208l-11.3 11.3L306.6 284l40.7 40.7L358.6 336l-11.3 11.3-16 16-4.7 4.7-6.6 0-160 0zm16-169.4L176 336l137.4 0-40.7-40.7L261.4 284l11.3-11.3L337.4 208 304 174.6l-64.7 64.7L228 250.6l-11.3-11.3L176 198.6z" />
    </Icon>
);

export default CircleDownLeft;