
import { Icon } from "../../index";

/**
 * A component that renders the `down-from-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-line?s=sharp-light down-from-line}
 * @preview ![down-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/down-from-line.svg)
 */
const DownFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M240 272l0 32 32 0 48 0 0 17.7L192 436.9 64 321.7 64 304l48 0 32 0 0-32 0-112 96 0 0 112zm112 0l-32 0-16 0-32 0 0-32 0-80 0-32-32 0-96 0-32 0 0 32 0 80 0 32-32 0-16 0-32 0 0 32 0 32L192 480 352 336l0-32 0-32zM16 32L0 32 0 64l16 0 352 0 16 0 0-32-16 0L16 32z" />
    </Icon>
);

export default DownFromLine;