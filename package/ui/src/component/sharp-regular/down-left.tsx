
import { Icon } from "../../index";

/**
 * A component that renders the `down-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-left?s=sharp-regular down-left}
 * @preview ![down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/down-left.svg)
 */
const DownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M136 267.9l33.9-33.9L272 131.9 316.1 176 214.1 278.1 180.1 312l33.9 33.9L252.1 384 64 384l0-188.1 38.1 38.1L136 267.9zM97.9 161.9L64 128 30.1 161.9 16 176l0 208 0 48 48 0 208 0 14.1-14.1L320 384l-33.9-33.9-4.1-4.1L248 312l33.9-33.9 68.1-68.1L384 176l-33.9-33.9L305.9 97.9 272 64 238.1 97.9l-68.1 68.1L136 200l-33.9-33.9-4.1-4.1z" />
    </Icon>
);

export default DownLeft;