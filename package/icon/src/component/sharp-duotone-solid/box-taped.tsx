
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-taped` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-taped?s=sharp-duotone-solid box-taped}
 * @preview ![box-taped](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/box-taped.svg)
 */
const BoxTaped: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l160 0L192 32 64 32 0 160zm160 0l128 0 0 128-128 0 0-128zM256 32l32 128 160 0L384 32 256 32z" />
        <path d="M160 160L0 160 0 480l448 0 0-320-160 0 0 128-128 0 0-128z" />
    </Icon>
);

export default BoxTaped;