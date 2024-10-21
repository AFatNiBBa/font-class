
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-image` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-image?s=sharp-regular hexagon-image}
 * @preview ![hexagon-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hexagon-image.svg)
 */
const HexagonImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M103.3 340l-48-84L155.9 80l200.3 0L456.7 256 417 325.6l-76.2-91.8-18.5-22.2-18.5 22.2L232.2 320l-38.9-40.6-17.8-18.6-17.3 19-55 60.2zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zM232 160a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z" />
    </Icon>
);

export default HexagonImage;