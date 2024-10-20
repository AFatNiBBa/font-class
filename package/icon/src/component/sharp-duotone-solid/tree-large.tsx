
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tree-large` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-large?s=sharp-duotone-solid tree-large}
 * @preview ![tree-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tree-large.svg)
 */
const TreeLarge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 480l0 32 192 0 0-288 0-32 64 0 0 32 0 288 192 0 0-32L368 352l56 0 0-32L344 208l48 0 0-32L224 0 56 176l0 32 48 0L24 320l0 32 56 0L0 480z" />
        <path d="M256 192l0 32 0 288-64 0 0-288 0-32 64 0z" />
    </Icon>
);

export default TreeLarge;