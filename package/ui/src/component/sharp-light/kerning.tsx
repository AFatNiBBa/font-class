
import { Icon } from "../../index";

/**
 * A component that renders the `kerning` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kerning?s=sharp-light kerning}
 * @preview ![kerning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/kerning.svg)
 */
const Kerning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M417.5 9.2l-224 480 29 13.5 224-480-29-13.5zM145.4 406.6l4.3 9.4 20.6 0 4.3-9.4L316.1 96l-35.2 0L160 361.4 39.1 96 3.9 96 145.4 406.6zm320-301.2L325 416l35.1 0 36.2-80 167.4 0 36.2 80 35.1 0L494.6 105.4 490.3 96l-20.7 0-4.2 9.4zM480 150.8L549.2 304l-138.4 0L480 150.8z" />
    </Icon>
);

export default Kerning;