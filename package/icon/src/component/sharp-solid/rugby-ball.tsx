
import { Icon } from "../../index";

/**
 * A component that renders the `rugby-ball` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rugby-ball?s=sharp-solid rugby-ball}
 * @preview ![rugby-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/rugby-ball.svg)
 */
const RugbyBall: typeof Icon = x => (
    <Icon {...x}>
        <path d="M226.2 105.9l-2.3 1.2-1.8 1.8L108.9 222.1l-1.8 1.8-1.2 2.3L16 406.1 16 336C16 159.3 159.3 16 336 16l70.1 0L226.2 105.9zm16.6 27.5L447.2 31.2l33.6 33.6L378.6 269.2 269.2 378.6 64.8 480.8 31.2 447.2 133.4 242.8 242.9 133.4zM105.9 496l179.8-89.9 2.3-1.2 1.8-1.8L403.1 289.9l1.8-1.8 1.2-2.3L496 105.9l0 70.1c0 176.7-143.3 320-320 320l-70.1 0z" />
    </Icon>
);

export default RugbyBall;