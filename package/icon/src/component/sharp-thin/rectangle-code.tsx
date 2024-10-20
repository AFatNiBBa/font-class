
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-code` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-code?s=sharp-thin rectangle-code}
 * @preview ![rectangle-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rectangle-code.svg)
 */
const RectangleCode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 48l0 416L16 464 16 48l480 0zM16 32L0 32 0 48 0 464l0 16 16 0 480 0 16 0 0-16 0-416 0-16-16 0L16 32zM292.7 176l5.7 5.7L372.7 256l-74.3 74.3-5.7 5.7L304 347.3l5.7-5.7 80-80 5.7-5.7-5.7-5.7-80-80-5.7-5.7L292.7 176zm-79 5.7l5.7-5.7L208 164.7l-5.7 5.7-80 80-5.7 5.7 5.7 5.7 80 80 5.7 5.7L219.3 336l-5.7-5.7L139.3 256l74.3-74.3z" />
    </Icon>
);

export default RectangleCode;