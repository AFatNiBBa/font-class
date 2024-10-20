
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-divide` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-divide?s=sharp-solid hexagon-divide}
 * @preview ![hexagon-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hexagon-divide.svg)
 */
const HexagonDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L128 32l256 0L512 256 384 480l-256 0L0 256zM288 128l-64 0 0 64 64 0 0-64zM168 232l-24 0 0 48 24 0 176 0 24 0 0-48-24 0-176 0zm56 88l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default HexagonDivide;