
import { Icon } from "../../index";

/**
 * A component that renders the `down-to-line` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-line?s=sharp-regular down-to-line}
 * @preview ![down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/down-to-line.svg)
 */
const DownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 160l0 48 48 0 28.1 0L192 316.1 83.9 208l28.1 0 48 0 0-48 0-80 64 0 0 80zm1.9 190.1L352 224l0-16 0-48-32 0-16 0-32 0 0-48 0-32 0-48-48 0-64 0-48 0 0 48 0 32 0 48-32 0-16 0-32 0 0 48 0 16L158.1 350.1 192 384l33.9-33.9zM24 432L0 432l0 48 24 0 336 0 24 0 0-48-24 0L24 432z" />
    </Icon>
);

export default DownToLine;