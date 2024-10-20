
import { Icon } from "../../index";

/**
 * A component that renders the `up-to-line` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-line?s=sharp-light up-to-line}
 * @preview ![up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/up-to-line.svg)
 */
const UpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 64L0 64 0 32l16 0 352 0 16 0 0 32-16 0L16 64zM240 336l0-32 32 0 48 0 0-17.7L192 171.1 64 286.3 64 304l48 0 32 0 0 32 0 112 96 0 0-112zm112 0l-32 0-16 0-32 0 0 32 0 80 0 32-32 0-96 0-32 0 0-32 0-80 0-32-32 0-16 0-32 0 0-32 0-32L192 128 352 272l0 32 0 32z" />
    </Icon>
);

export default UpToLine;