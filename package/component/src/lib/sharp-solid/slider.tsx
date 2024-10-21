
import { Icon } from "../../index";

/**
 * A component that renders the `slider` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slider?s=sharp-solid slider}
 * @preview ![slider](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/slider.svg)
 */
const Slider: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 160l0 192-32 0 0-192 32 0zM320 96l-64 0 0 64 0 192 0 64 64 0 32 0 64 0 0-64 0-64 64 0 32 0 0-64-32 0-64 0 0-64 0-64-64 0-32 0zM0 288l32 0 192 0 0-64L32 224 0 224l0 64z" />
    </Icon>
);

export default Slider;