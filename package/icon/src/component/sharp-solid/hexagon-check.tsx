
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-check?s=sharp-solid hexagon-check}
 * @preview ![hexagon-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hexagon-check.svg)
 */
const HexagonCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L128 32l256 0L512 256 384 480l-256 0L0 256zm369-47l17-17L352 158.1l-17 17-111 111-47-47-17-17L126.1 256l17 17 64 64 17 17 17-17L369 209z" />
    </Icon>
);

export default HexagonCheck;