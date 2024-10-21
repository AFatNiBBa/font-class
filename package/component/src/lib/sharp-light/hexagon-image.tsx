
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-image` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-image?s=sharp-light hexagon-image}
 * @preview ![hexagon-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hexagon-image.svg)
 */
const HexagonImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M136.5 430.4L91 350.8l53.2-53.2 61.3 59.2-69 73.5zM340.3 213.1l-113 120.5-72.3-69.8-11.3-10.9-11.1 11.1L74.6 322 36.9 256 146.6 64l218.9 0L475.1 256l-27 47.2-84.5-90.1L352 200.6l-11.7 12.5zm91.2 119.2L365.4 448l-201.5 0L352 247.4l79.6 84.9zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zm48 128a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default HexagonImage;