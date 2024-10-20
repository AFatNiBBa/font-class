
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-exclamation` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-exclamation?s=sharp-light hexagon-exclamation}
 * @preview ![hexagon-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hexagon-exclamation.svg)
 */
const HexagonExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M36.9 256L146.6 64l218.9 0L475.1 256 365.4 448l-218.9 0L36.9 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zm144 96l-32 0 0 16 0 128 0 16 32 0 0-16 0-128 0-16zM232 320l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default HexagonExclamation;