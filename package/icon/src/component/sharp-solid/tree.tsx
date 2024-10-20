
import { Icon } from "../../index";

/**
 * A component that renders the `tree` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree?s=sharp-solid tree}
 * @preview ![tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tree.svg)
 */
const Tree: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0L56 176l0 32 48 0L24 288l0 32 56 0L0 416l0 32 192 0 0 32 0 32 64 0 0-32 0-32 192 0 0-32-80-96 56 0 0-32-80-80 48 0 0-32L224 0z" />
    </Icon>
);

export default Tree;