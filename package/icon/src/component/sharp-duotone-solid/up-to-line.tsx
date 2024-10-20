
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-line?s=sharp-duotone-solid up-to-line}
 * @preview ![up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/up-to-line.svg)
 */
const UpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l32 0 320 0 32 0 0-64-32 0L32 32 0 32z" />
        <path d="M192 128L352 288l0 32-96 0 0 160-128 0 0-160-96 0 0-32L192 128z" />
    </Icon>
);

export default UpToLine;