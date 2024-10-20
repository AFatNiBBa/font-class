
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-xmark?s=sharp-regular hexagon-xmark}
 * @preview ![hexagon-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hexagon-xmark.svg)
 */
const HexagonXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M55.3 256L155.9 80l200.3 0L456.7 256 356.1 432l-200.3 0L55.3 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zM353.9 192L320 158.1l-17 17-47 47-47-47-17-17L158.1 192l17 17 47 47-47 47-17 17L192 353.9l17-17 47-47 47 47 17 17L353.9 320l-17-17-47-47 47-47 17-17z" />
    </Icon>
);

export default HexagonXmark;