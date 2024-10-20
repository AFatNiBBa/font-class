
import { Icon } from "../../index";

/**
 * A component that renders the `down-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-left?s=sharp-light down-left}
 * @preview ![down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/down-left.svg)
 */
const DownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M144 237.3l22.6-22.6L272 109.3 338.7 176 233.4 281.4 210.7 304l22.6 22.6L282.7 376l-8 8L64 384l0-210.7 8-8 49.4 49.4L144 237.3zM94.6 142.6L72 120 49.4 142.6 32 160l0 224 0 32 32 0 224 0 17.4-17.4L328 376l-22.6-22.6-26.7-26.7L256 304l22.6-22.6 82.7-82.7L384 176l-22.6-22.6L294.6 86.6 272 64 249.4 86.6l-82.7 82.7L144 192l-22.6-22.6L94.6 142.6z" />
    </Icon>
);

export default DownLeft;