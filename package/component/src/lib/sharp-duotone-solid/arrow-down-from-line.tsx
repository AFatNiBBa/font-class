
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-from-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-line?s=sharp-duotone-solid arrow-down-from-line}
 * @preview ![arrow-down-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-from-line.svg)
 */
const ArrowDownFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l32 0 320 0 32 0 0-64-32 0L32 32 0 32z" />
        <path d="M192 477.3l22.6-22.6 128-128L365.3 304 320 258.7l-22.6 22.6L224 354.7 224 192l0-32-64 0 0 32 0 162.7L86.6 281.4 64 258.7 18.7 304l22.6 22.6 128 128L192 477.3z" />
    </Icon>
);

export default ArrowDownFromLine;