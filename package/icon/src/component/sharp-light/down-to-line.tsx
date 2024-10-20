
import { Icon } from "../../index";

/**
 * A component that renders the `down-to-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-line?s=sharp-light down-to-line}
 * @preview ![down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/down-to-line.svg)
 */
const DownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 448L0 448l0 32 16 0 352 0 16 0 0-32-16 0L16 448zM240 176l0 32 32 0 48 0 0 17.7L192 340.9 64 225.7 64 208l48 0 32 0 0-32 0-112 96 0 0 112zm112 0l-32 0-16 0-32 0 0-32 0-80 0-32-32 0-96 0-32 0 0 32 0 80 0 32-32 0-16 0-32 0 0 32 0 32L192 384 352 240l0-32 0-32z" />
    </Icon>
);

export default DownToLine;