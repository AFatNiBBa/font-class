
import { Icon } from "../../index";

/**
 * A component that renders the `slider` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slider?s=light slider}
 * @preview ![slider](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/slider.svg)
 */
const Slider: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 128c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32l32 0zM320 96c-35.3 0-64 28.7-64 64l0 192c0 35.3 28.7 64 64 64l32 0c35.3 0 64-28.7 64-64l0-80 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-80 0 0-80c0-35.3-28.7-64-64-64l-32 0zM0 256c0 8.8 7.2 16 16 16l208 0 0-32L16 240c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default Slider;