
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamond-turn-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-turn-right?s=sharp-duotone-solid diamond-turn-right}
 * @preview ![diamond-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diamond-turn-right.svg)
 */
const DiamondTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L256 512 512 256 256 0 0 256zm160-40l24 0 104 0 0-72 16 0 96 96-96 96-16 0 0-72-80 0 0 64 0 24-48 0 0-24 0-88 0-24z" />
        <path d="M288 336l16 0 96-96-96-96-16 0 0 72-104 0-24 0 0 24 0 88 0 24 48 0 0-24 0-64 80 0 0 72z" />
    </Icon>
);

export default DiamondTurnRight;