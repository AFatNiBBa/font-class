
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-exclamation?s=sharp-solid hexagon-exclamation}
 * @preview ![hexagon-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hexagon-exclamation.svg)
 */
const HexagonExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L128 32l256 0L512 256 384 480l-256 0L0 256zM280 128l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zM232 320l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default HexagonExclamation;