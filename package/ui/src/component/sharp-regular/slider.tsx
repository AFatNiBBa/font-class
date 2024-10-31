
import { Icon } from "../../index";

/**
 * A component that renders the `slider` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slider?s=sharp-regular slider}
 * @preview ![slider](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/slider.svg)
 */
const Slider: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 144l0 224-64 0 0-224 64 0zM304 96l-48 0 0 48 0 224 0 48 48 0 64 0 48 0 0-48 0-88 72 0 24 0 0-48-24 0-72 0 0-88 0-48-48 0-64 0zM0 280l24 0 200 0 0-48L24 232 0 232l0 48z" />
    </Icon>
);

export default Slider;