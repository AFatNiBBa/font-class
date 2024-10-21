
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon-image` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-image?s=sharp-duotone-solid hexagon-image}
 * @preview ![hexagon-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hexagon-image.svg)
 */
const HexagonImage: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L128 480l256 0L512 256 384 32 128 32 0 256zm107.1 79.9c17.1-18.7 34.1-37.4 51.2-56.1c5.8-6.3 11.5-12.6 17.3-19c5.9 6.2 11.8 12.4 17.8 18.6c13 13.5 25.9 27.1 38.9 40.6l71.6-86.2c6.2-7.4 12.3-14.8 18.5-22.2c6.2 7.4 12.3 14.8 18.5 22.2l72.6 87.4L353.5 424.9l-195 0-51.4-89zM232 160a40 40 0 1 1 -80 0 40 40 0 1 1 80 0z" />
        <path d="M107.1 335.9l51.4 89 195 0 59.9-103.7L322.3 211.6 232.2 320l-56.6-59.2-68.5 75z" />
    </Icon>
);

export default HexagonImage;