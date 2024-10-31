
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-right?s=sharp-regular arrow-turn-right}
 * @preview ![arrow-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-turn-right.svg)
 */
const ArrowTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M373.8 361l-17 17L322.9 344l17-17 79-79L48 248l0 208 0 24L0 480l0-24L0 224l0-24 24 0 394.9 0-79-79-17-17 33.9-33.9 17 17 120 120 17 17-17 17-120 120z" />
    </Icon>
);

export default ArrowTurnRight;