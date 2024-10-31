
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rugby-ball` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rugby-ball?s=sharp-duotone-solid rugby-ball}
 * @preview ![rugby-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rugby-ball.svg)
 */
const RugbyBall: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 336l0 96L120.2 233.4 233.4 120.2 432 16l-96 0C159.3 16 16 159.3 16 336zM80 496l96 0c176.7 0 320-143.3 320-320l0-96L391.8 278.6 278.6 391.8 80 496z" />
        <path d="M233.4 120.2L432 16l64 64L391.8 278.6 278.6 391.8 80 496 16 432 120.2 233.4 233.4 120.2z" />
    </Icon>
);

export default RugbyBall;