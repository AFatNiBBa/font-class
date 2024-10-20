
import { Icon } from "../../index";

/**
 * A component that renders the `up-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-left?s=sharp-regular up-left}
 * @preview ![up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/up-left.svg)
 */
const UpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M136 244.1l33.9 33.9L272 380.1 316.1 336 214.1 233.9 180.1 200l33.9-33.9L252.1 128 64 128l0 188.1 38.1-38.1L136 244.1zM97.9 350.1L64 384 30.1 350.1 16 336l0-208 0-48 48 0 208 0 14.1 14.1L320 128l-33.9 33.9-4.1 4.1L248 200l33.9 33.9 68.1 68.1L384 336l-33.9 33.9-44.1 44.1L272 448l-33.9-33.9-68.1-68.1L136 312l-33.9 33.9-4.1 4.1z" />
    </Icon>
);

export default UpLeft;