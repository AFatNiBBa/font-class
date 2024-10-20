
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-divide` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-divide?s=sharp-light hexagon-divide}
 * @preview ![hexagon-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hexagon-divide.svg)
 */
const HexagonDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M36.9 256L146.6 64l218.9 0L475.1 256 365.4 448l-218.9 0L36.9 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zM280 136l-48 0 0 48 48 0 0-48zM160 240l-16 0 0 32 16 0 192 0 16 0 0-32-16 0-192 0zm72 88l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default HexagonDivide;