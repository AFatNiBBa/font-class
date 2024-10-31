
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-left?s=sharp-light circle-up-left}
 * @preview ![circle-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-up-left.svg)
 */
const CircleUpLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 144l-16 0 0 16 0 160 0 6.6 4.7 4.7 16 16L176 358.6l11.3-11.3L228 306.6l64.7 64.7L304 382.6l11.3-11.3 56-56L382.6 304l-11.3-11.3L306.6 228l40.7-40.7L358.6 176l-11.3-11.3-16-16-4.7-4.7-6.6 0-160 0zm16 169.4L176 176l137.4 0-40.7 40.7L261.4 228l11.3 11.3L337.4 304 304 337.4l-64.7-64.7L228 261.4l-11.3 11.3L176 313.4z" />
    </Icon>
);

export default CircleUpLeft;