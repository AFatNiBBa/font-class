
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-tree` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-tree?s=sharp-duotone-solid house-tree}
 * @preview ![house-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-tree.svg)
 */
const HouseTree: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M277 125.1L404.5 231.4 416 241l0 15 0 256 224 0 0-48L544 352l64 0 0-48L512 192l64 0 0-48L416 0 277 125.1z" />
        <path d="M0 512L0 256 192 96 384 256l0 256L0 512zM240 368l0-96-96 0 0 96 96 0z" />
    </Icon>
);

export default HouseTree;