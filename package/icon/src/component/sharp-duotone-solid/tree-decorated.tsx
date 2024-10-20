
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tree-decorated` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-decorated?s=sharp-duotone-solid tree-decorated}
 * @preview ![tree-decorated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tree-decorated.svg)
 */
const TreeDecorated: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 480l0 32 448 0 0-32L368 352l56 0 0-32L344 208l48 0 0-32L224 0 56 176l0 32 48 0L24 320l0 32 56 0L0 480zM184 288a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96-128a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm32 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M256 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm32 256a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default TreeDecorated;