
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-turn-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-turn-right?s=sharp-solid diamond-turn-right}
 * @preview ![diamond-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/diamond-turn-right.svg)
 */
const DiamondTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0L0 256 256 512 512 256 256 0zm48 336l-16 0 0-72-80 0 0 64 0 24-48 0 0-24 0-88 0-24 24 0 104 0 0-72 16 0 96 96-96 96z" />
    </Icon>
);

export default DiamondTurnRight;