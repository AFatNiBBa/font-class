
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-minus?s=sharp-thin hexagon-minus}
 * @preview ![hexagon-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hexagon-minus.svg)
 */
const HexagonMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M18.4 256L137.3 48l237.4 0L493.6 256 374.7 464l-237.4 0L18.4 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zm24 232l208 0 0-16-208 0 0 16z" />
    </Icon>
);

export default HexagonMinus;