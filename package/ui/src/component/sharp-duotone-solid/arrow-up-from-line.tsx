
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-from-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-line?s=sharp-duotone-solid arrow-up-from-line}
 * @preview ![arrow-up-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-from-line.svg)
 */
const ArrowUpFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 416l32 0 320 0 32 0 0 64-32 0L32 480 0 480l0-64z" />
        <path d="M192 34.7l22.6 22.6 128 128L365.3 208 320 253.3l-22.6-22.6L224 157.3 224 320l0 32-64 0 0-32 0-162.7L86.6 230.6 64 253.3 18.7 208l22.6-22.6 128-128L192 34.7z" />
    </Icon>
);

export default ArrowUpFromLine;