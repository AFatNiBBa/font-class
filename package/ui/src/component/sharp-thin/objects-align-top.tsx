
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-top` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-top?s=sharp-thin objects-align-top}
 * @preview ![objects-align-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/objects-align-top.svg)
 */
const ObjectsAlignTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 0L0 0 0 16l512 0 0-16zM208 112l0 384L80 496l0-384 128 0zM80 96L64 96l0 16 0 384 0 16 16 0 128 0 16 0 0-16 0-384 0-16-16 0L80 96zm352 16l0 256-128 0 0-256 128 0zM304 96l-16 0 0 16 0 256 0 16 16 0 128 0 16 0 0-16 0-256 0-16-16 0L304 96z" />
    </Icon>
);

export default ObjectsAlignTop;