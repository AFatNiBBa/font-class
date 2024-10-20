
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-turn-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-turn-right?s=sharp-regular diamond-turn-right}
 * @preview ![diamond-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/diamond-turn-right.svg)
 */
const DiamondTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M33.9 289.9L0 256l33.9-33.9L222.1 33.9 256 0l33.9 33.9L478.1 222.1 512 256l-33.9 33.9L289.9 478.1 256 512l-33.9-33.9L33.9 289.9zM67.9 256L256 444.1 444.1 256 256 67.9 67.9 256zM304 144l80 80-80 80-16 0 0-56-64 0 0 48 0 24-48 0 0-24 0-72 0-24 24 0 88 0 0-56 16 0z" />
    </Icon>
);

export default DiamondTurnRight;