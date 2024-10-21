
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-plus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-plus?s=sharp-regular hexagon-plus}
 * @preview ![hexagon-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hexagon-plus.svg)
 */
const HexagonPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M55.3 256L155.9 80l200.3 0L456.7 256 356.1 432l-200.3 0L55.3 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zM232 368l48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24-48 0 0 24 0 64-64 0-24 0 0 48 24 0 64 0 0 64 0 24z" />
    </Icon>
);

export default HexagonPlus;