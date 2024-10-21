
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-long-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-long-to-line?s=sharp-duotone-solid left-long-to-line}
 * @preview ![left-long-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/left-long-to-line.svg)
 */
const LeftLongToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64l64 0 0 32 0 320 0 32L0 448l0-32L0 96 0 64z" />
        <path d="M128 256L288 96l32 0 0 96 320 0 0 128-320 0 0 96-32 0L128 256z" />
    </Icon>
);

export default LeftLongToLine;