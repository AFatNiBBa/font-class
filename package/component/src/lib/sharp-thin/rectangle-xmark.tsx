
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-xmark?s=sharp-thin rectangle-xmark}
 * @preview ![rectangle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rectangle-xmark.svg)
 */
const RectangleXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l0 416 480 0 0-416L16 48zM0 32l16 0 480 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM185.8 174.5l5.7 5.7L256 244.7l64.6-64.6 5.7-5.7 11.3 11.3-5.7 5.7L267.3 256l64.6 64.6 5.7 5.7-11.3 11.3-5.7-5.7L256 267.3l-64.6 64.6-5.7 5.7-11.3-11.3 5.7-5.7L244.7 256l-64.6-64.6-5.7-5.7 11.3-11.3z" />
    </Icon>
);

export default RectangleXmark;