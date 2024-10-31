
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-from-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-line?s=sharp-duotone-solid down-from-line}
 * @preview ![down-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/down-from-line.svg)
 */
const DownFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l32 0 320 0 32 0 0-64-32 0L32 32 0 32z" />
        <path d="M192 480L32 320l0-32 96 0 0-160 128 0 0 160 96 0 0 32L192 480z" />
    </Icon>
);

export default DownFromLine;