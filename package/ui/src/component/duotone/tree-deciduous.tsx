
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tree-deciduous` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree-deciduous?s=duotone tree-deciduous}
 * @preview ![tree-deciduous](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tree-deciduous.svg)
 */
const TreeDeciduous: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288c0 53 43 96 96 96l128 0 0-224c0-17.7 14.3-32 32-32s32 14.3 32 32l0 224 128 0c53 0 96-43 96-96c0-39.7-24.1-73.8-58.5-88.4c6.7-11.7 10.5-25.2 10.5-39.6c0-44.2-35.8-80-80-80c-11.5 0-22.5 2.4-32.4 6.8C347 38.1 305.9 0 256 0s-91 38.1-95.6 86.8C150.5 82.4 139.5 80 128 80c-44.2 0-80 35.8-80 80c0 14.4 3.8 27.9 10.5 39.6C24.1 214.2 0 248.3 0 288z" />
        <path d="M256 128c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default TreeDeciduous;