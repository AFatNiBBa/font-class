
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left?s=sharp-duotone-solid left}
 * @preview ![left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/left.svg)
 */
const Left: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M224 192l224 0 0 128-224 0 0-128z" />
        <path d="M224 64l-32 0L0 256 192 448l32 0 0-128 0-128 0-128z" />
    </Icon>
);

export default Left;