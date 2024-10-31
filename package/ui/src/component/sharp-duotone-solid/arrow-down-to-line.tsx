
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-line?s=sharp-duotone-solid arrow-down-to-line}
 * @preview ![arrow-down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-to-line.svg)
 */
const ArrowDownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64 32 0 320 0 32 0 0-64-32 0L32 416 0 416z" />
        <path d="M192 365.3l22.6-22.6 128-128L365.3 192 320 146.7l-22.6 22.6L224 242.7 224 64l0-32-64 0 0 32 0 178.7L86.6 169.4 64 146.7 18.7 192l22.6 22.6 128 128L192 365.3z" />
    </Icon>
);

export default ArrowDownToLine;