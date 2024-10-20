
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-line?s=sharp-duotone-solid left-to-line}
 * @preview ![left-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/left-to-line.svg)
 */
const LeftToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 96 0 416l0 32 64 0 0-32L64 96l0-32L0 64z" />
        <path d="M96 256L256 416l32 0 0-96 160 0 0-128-160 0 0-96-32 0L96 256z" />
    </Icon>
);

export default LeftToLine;