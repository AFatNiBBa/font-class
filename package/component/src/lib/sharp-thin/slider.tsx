
import { Icon } from "../../index";

/**
 * A component that renders the `slider` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slider?s=sharp-thin slider}
 * @preview ![slider](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/slider.svg)
 */
const Slider: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 112l0 288-128 0 0-288 128 0zM272 96l-16 0 0 16 0 288 0 16 16 0 128 0 16 0 0-16 0-136 88 0 8 0 0-16-8 0-88 0 0-136 0-16-16 0L272 96zM0 264l8 0 216 0 0-16L8 248l-8 0 0 16z" />
    </Icon>
);

export default Slider;