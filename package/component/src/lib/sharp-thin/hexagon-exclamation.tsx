
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-exclamation` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-exclamation?s=sharp-thin hexagon-exclamation}
 * @preview ![hexagon-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hexagon-exclamation.svg)
 */
const HexagonExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M18.4 256L137.3 48l237.4 0L493.6 256 374.7 464l-237.4 0L18.4 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zm136 96l-16 0 0 8 0 160 0 8 16 0 0-8 0-160 0-8zM240 336l0 32 32 0 0-32-32 0z" />
    </Icon>
);

export default HexagonExclamation;