
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-from-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-from-line?s=sharp-duotone-solid up-from-line}
 * @preview ![up-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/up-from-line.svg)
 */
const UpFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 416l32 0 320 0 32 0 0 64-32 0L32 480 0 480l0-64z" />
        <path d="M192 32L32 192l0 32 96 0 0 160 128 0 0-160 96 0 0-32L192 32z" />
    </Icon>
);

export default UpFromLine;