
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-check?s=sharp-light octagon-check}
 * @preview ![octagon-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/octagon-check.svg)
 */
const OctagonCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 338.7l0-165.5L173.3 32l165.5 0L480 173.3l0 165.5L338.7 480l-165.5 0L32 338.7zM160 0L0 160 0 352 160 512l192 0L512 352l0-192L352 0 160 0zM363.3 203.3L374.6 192 352 169.4l-11.3 11.3L224 297.4l-52.7-52.7L160 233.4 137.4 256l11.3 11.3 64 64L224 342.6l11.3-11.3 128-128z" />
    </Icon>
);

export default OctagonCheck;