
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-image` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-image?s=sharp-thin hexagon-image}
 * @preview ![hexagon-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hexagon-image.svg)
 */
const HexagonImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M135.3 460.5L81 365.5l79.1-79.1 72.6 70.2L135.3 460.5zM72.8 351.1L18.4 256 137.3 48l237.4 0L493.6 256l-32 56.1-87.7-93.5-5.8-6.2-5.8 6.2L243.7 344.9l-78.1-75.5-5.7-5.5-5.6 5.6L72.8 351.1zm380.4-24.5L374.7 464 154 464 368 235.7l85.2 90.9zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zm64 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-32-48a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default HexagonImage;