
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tree-deciduous` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-deciduous?s=sharp-duotone-solid tree-deciduous}
 * @preview ![tree-deciduous](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tree-deciduous.svg)
 */
const TreeDeciduous: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288l0 96 224 0 0-168 0-32 64 0 0 32 0 168 224 0 0-96c0-35.5-19.3-66.6-48-83.2l0-44.8c0-44.2-35.8-80-80-80l-33.3 0C343.1 34.6 303.6 0 256 0s-87.1 34.6-94.7 80L128 80c-44.2 0-80 35.8-80 80l0 44.8C19.3 221.4 0 252.5 0 288z" />
        <path d="M288 184l0 32 0 264 0 32-64 0 0-32 0-264 0-32 64 0z" />
    </Icon>
);

export default TreeDeciduous;