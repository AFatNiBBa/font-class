
import { Icon } from "../../index";

/**
 * A component that renders the `sword` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sword?s=sharp-solid sword}
 * @preview ![sword](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sword.svg)
 */
const Sword: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 16L166.6 249.4l96 96L496 112 512 0 400 16zM0 416l96 96 32-32-16-32 56-56 88 56 32-32L96 224 64 256l56 88L64 400 32 384 0 416z" />
    </Icon>
);

export default Sword;