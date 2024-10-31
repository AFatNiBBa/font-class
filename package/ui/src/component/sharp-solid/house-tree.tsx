
import { Icon } from "../../index";

/**
 * A component that renders the `house-tree` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-tree?s=sharp-solid house-tree}
 * @preview ![house-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-tree.svg)
 */
const HouseTree: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 464l0 48-224 0 0-256 0-15-11.5-9.6L277 125.1 416 0 576 144l0 48-64 0 96 112 0 48-64 0 96 112zM0 256L192 96 384 256l0 256L0 512 0 256zm240 16l-96 0 0 96 96 0 0-96z" />
    </Icon>
);

export default HouseTree;