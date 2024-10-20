
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-image` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-image?s=sharp-solid hexagon-image}
 * @preview ![hexagon-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hexagon-image.svg)
 */
const HexagonImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 32L0 256 128 480l256 0L512 256 384 32 128 32zm30.3 247.8l17.3-19 17.8 18.6L232.2 320l71.6-86.2 18.5-22.2 18.5 22.2 72.6 87.4L353.5 424.9l-195 0-51.4-89 51.2-56.1zM192 120a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
    </Icon>
);

export default HexagonImage;