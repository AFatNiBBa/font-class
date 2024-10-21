
import { Icon } from "../../index";

/**
 * A component that renders the `rugby-ball` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rugby-ball?s=sharp-thin rugby-ball}
 * @preview ![rugby-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rugby-ball.svg)
 */
const RugbyBall: typeof Icon = x => (
    <Icon {...x}>
        <path d="M425.4 32l3.7 3.7L230.5 112.8l-1.6 .6-1.2 1.2L114.6 227.7l-1.2 1.2-.6 1.6L35.7 429 32 425.4 32 336C32 168.1 168.1 32 336 32l89.4 0zM70.6 464L48 441.4l79-203.6L237.8 127.1 441.4 48 464 70.6l-79 203.6L274.2 384.9 70.6 464zM83 476.3l198.6-77.1 1.6-.6 1.2-1.2L397.4 284.3l1.2-1.2 .6-1.6L476.3 83l3.7 3.7 0 89.4c0 167.9-136.1 304-304 304l-89.4 0L83 476.3zM496 80L432 16l-96 0C159.3 16 16 159.3 16 336l0 96 64 64 96 0c176.7 0 320-143.3 320-320l0-96z" />
    </Icon>
);

export default RugbyBall;