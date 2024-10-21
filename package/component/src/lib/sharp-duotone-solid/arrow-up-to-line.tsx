
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-line?s=sharp-duotone-solid arrow-up-to-line}
 * @preview ![arrow-up-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-to-line.svg)
 */
const ArrowUpToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 320 0 32 0 0 64-32 0L32 96 0 96 0 32z" />
        <path d="M192 146.7l22.6 22.6 128 128L365.3 320 320 365.3l-22.6-22.6L224 269.3 224 448l0 32-64 0 0-32 0-178.7L86.6 342.6 64 365.3 18.7 320l22.6-22.6 128-128L192 146.7z" />
    </Icon>
);

export default ArrowUpToLine;