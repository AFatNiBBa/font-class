
import { Icon, generic } from "../../index";

/**
 * A component that renders the `left-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-right?s=sharp-duotone-solid left-right}
 * @preview ![left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/left-right.svg)
 */
const LeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 208l0 96 96 0 0 80 32 0L512 256 384 128l-32 0 0 80-96 0z" />
        <path d="M0 256L128 384l32 0 0-80 96 0 0-96-96 0 0-80-32 0L0 256z" />
    </Icon>
);

export default LeftRight;