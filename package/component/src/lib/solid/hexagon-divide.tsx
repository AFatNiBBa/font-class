
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-divide` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-divide?s=solid hexagon-divide}
 * @preview ![hexagon-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/hexagon-divide.svg)
 */
const HexagonDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M17.1 292c-12.9-22.3-12.9-49.7 0-72L105.4 67.1c12.9-22.3 36.6-36 62.4-36l176.6 0c25.7 0 49.5 13.7 62.4 36L494.9 220c12.9 22.3 12.9 49.7 0 72L406.6 444.9c-12.9 22.3-36.6 36-62.4 36l-176.6 0c-25.7 0-49.5-13.7-62.4-36L17.1 292zM256 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-88 40c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0zM288 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default HexagonDivide;