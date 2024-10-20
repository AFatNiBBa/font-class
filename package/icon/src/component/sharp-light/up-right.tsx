
import { Icon } from "../../index";

/**
 * A component that renders the `up-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right?s=sharp-light up-right}
 * @preview ![up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/up-right.svg)
 */
const UpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M240 274.7l-22.6 22.6L112 402.7 45.3 336 150.6 230.6 173.3 208l-22.6-22.6L101.3 136l8-8L320 128l0 210.7-8 8-49.4-49.4L240 274.7zm49.4 94.6L312 392l22.6-22.6L352 352l0-224 0-32-32 0L96 96 78.6 113.4 56 136l22.6 22.6 26.7 26.7L128 208l-22.6 22.6L22.6 313.4 0 336l22.6 22.6 66.7 66.7L112 448l22.6-22.6 82.7-82.7L240 320l22.6 22.6 26.7 26.7z" />
    </Icon>
);

export default UpRight;