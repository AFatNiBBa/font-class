
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-xmark?s=sharp-light rectangle-xmark}
 * @preview ![rectangle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rectangle-xmark.svg)
 */
const RectangleXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64l0 384 448 0 0-384L32 64zM0 32l32 0 448 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM191.4 168.8l11.3 11.3L256 233.4l53.3-53.3 11.3-11.3 22.6 22.6-11.3 11.3L278.6 256l53.3 53.3 11.3 11.3-22.6 22.6-11.3-11.3L256 278.6l-53.3 53.3-11.3 11.3-22.6-22.6 11.3-11.3L233.4 256l-53.3-53.3-11.3-11.3 22.6-22.6z" />
    </Icon>
);

export default RectangleXmark;