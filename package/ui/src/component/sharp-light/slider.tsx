
import { Icon } from "../../index";

/**
 * A component that renders the `slider` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slider?s=sharp-light slider}
 * @preview ![slider](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/slider.svg)
 */
const Slider: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 128l0 256-96 0 0-256 96 0zM288 96l-32 0 0 32 0 256 0 32 32 0 96 0 32 0 0-32 0-112 80 0 16 0 0-32-16 0-80 0 0-112 0-32-32 0-96 0zM0 272l16 0 208 0 0-32L16 240 0 240l0 32z" />
    </Icon>
);

export default Slider;