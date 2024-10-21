
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tree` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree?s=sharp-duotone-solid tree}
 * @preview ![tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tree.svg)
 */
const Tree: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 32 192 0 0-224 0-32 64 0 0 32 0 224 192 0 0-32-80-96 56 0 0-32-80-80 48 0 0-32L224 0 56 176l0 32 48 0L24 288l0 32 56 0L0 416z" />
        <path d="M256 192l0 32 0 256 0 32-64 0 0-32 0-256 0-32 64 0z" />
    </Icon>
);

export default Tree;