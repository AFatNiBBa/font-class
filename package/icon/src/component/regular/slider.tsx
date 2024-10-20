
import { Icon } from "../../index";

/**
 * A component that renders the `slider` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slider?s=regular slider}
 * @preview ![slider](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/slider.svg)
 */
const Slider: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 144c8.8 0 16 7.2 16 16l0 192c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-192c0-8.8 7.2-16 16-16l32 0zM320 96c-35.3 0-64 28.7-64 64l0 192c0 35.3 28.7 64 64 64l32 0c35.3 0 64-28.7 64-64l0-72 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0 0-72c0-35.3-28.7-64-64-64l-32 0zM0 256c0 13.3 10.7 24 24 24l200 0 0-48L24 232c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default Slider;