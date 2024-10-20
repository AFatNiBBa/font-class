
import { Icon } from "../../index";

/**
 * A component that renders the `sword` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sword?s=sharp-regular sword}
 * @preview ![sword](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sword.svg)
 */
const Sword: typeof Icon = x => (
    <Icon {...x}>
        <path d="M200.6 283.3l-33.9-33.9L400 16l62.5-8.9L512 0l-7.1 49.5L496 112 262.6 345.4l-33.9-33.9L450.7 89.4l4.7-32.8-32.8 4.7L200.6 283.3zM0 416l32-32 32 16 56-56L64 256l32-32L288 416l-32 32-88-56-56 56 16 32L96 512 0 416z" />
    </Icon>
);

export default Sword;