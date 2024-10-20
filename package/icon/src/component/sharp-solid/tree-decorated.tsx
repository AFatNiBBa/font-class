
import { Icon } from "../../index";

/**
 * A component that renders the `tree-decorated` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-decorated?s=sharp-solid tree-decorated}
 * @preview ![tree-decorated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tree-decorated.svg)
 */
const TreeDecorated: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0L56 176l0 32 48 0L24 320l0 32 56 0L0 480l0 32 448 0 0-32L368 352l56 0 0-32L344 208l48 0 0-32L224 0zM160 264a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72-104a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm56 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default TreeDecorated;