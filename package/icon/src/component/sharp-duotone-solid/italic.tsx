
import { Icon, generic } from "../../index";

/**
 * A component that renders the `italic` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/italic?s=sharp-duotone-solid italic}
 * @preview ![italic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/italic.svg)
 */
const Italic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M128 32l32 0 192 0 32 0 0 64-32 0-58.7 0L160 416l64 0 32 0 0 64-32 0L32 480 0 480l0-64 32 0 58.7 0L224 96l-64 0-32 0 0-64z" />
    </Icon>
);

export default Italic;