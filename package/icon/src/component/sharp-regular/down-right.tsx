
import { Icon } from "../../index";

/**
 * A component that renders the `down-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-right?s=sharp-regular down-right}
 * @preview ![down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/down-right.svg)
 */
const DownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M248 267.9l-33.9-33.9L112 131.9 67.9 176 169.9 278.1 203.9 312l-33.9 33.9L131.9 384 320 384l0-188.1-38.1 38.1L248 267.9zm38.1-105.9L320 128l33.9 33.9L368 176l0 208 0 48-48 0-208 0L97.9 417.9 64 384l33.9-33.9 4.1-4.1L136 312l-33.9-33.9L33.9 209.9 0 176l33.9-33.9L78.1 97.9 112 64l33.9 33.9 68.1 68.1L248 200l33.9-33.9 4.1-4.1z" />
    </Icon>
);

export default DownRight;