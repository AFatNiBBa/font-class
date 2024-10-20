
import { Icon } from "../../index";

/**
 * A component that renders the `up-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right?s=sharp-regular up-right}
 * @preview ![up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/up-right.svg)
 */
const UpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M248 244.1l-33.9 33.9L112 380.1 67.9 336 169.9 233.9 203.9 200l-33.9-33.9L131.9 128 320 128l0 188.1-38.1-38.1L248 244.1zm38.1 105.9L320 384l33.9-33.9L368 336l0-208 0-48-48 0L112 80 97.9 94.1 64 128l33.9 33.9 4.1 4.1L136 200l-33.9 33.9L33.9 302.1 0 336l33.9 33.9 44.1 44.1L112 448l33.9-33.9 68.1-68.1L248 312l33.9 33.9 4.1 4.1z" />
    </Icon>
);

export default UpRight;