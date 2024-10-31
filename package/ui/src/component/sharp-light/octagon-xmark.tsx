
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-xmark?s=sharp-light octagon-xmark}
 * @preview ![octagon-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/octagon-xmark.svg)
 */
const OctagonXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 338.7l0-165.5L173.3 32l165.5 0L480 173.3l0 165.5L338.7 480l-165.5 0L32 338.7zM160 0L0 160 0 352 160 512l192 0L512 352l0-192L352 0 160 0zm31.4 168.8l-22.6 22.6 11.3 11.3L233.4 256l-53.3 53.3-11.3 11.3 22.6 22.6 11.3-11.3L256 278.6l53.3 53.3 11.3 11.3 22.6-22.6-11.3-11.3L278.6 256l53.3-53.3 11.3-11.3-22.6-22.6-11.3 11.3L256 233.4l-53.3-53.3-11.3-11.3z" />
    </Icon>
);

export default OctagonXmark;