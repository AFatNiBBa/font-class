
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-minus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-minus?s=sharp-regular hexagon-minus}
 * @preview ![hexagon-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hexagon-minus.svg)
 */
const HexagonMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M55.3 256L155.9 80l200.3 0L456.7 256 356.1 432l-200.3 0L55.3 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zm56 200l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default HexagonMinus;