
import { Icon } from "../../index";

/**
 * A component that renders the `bowling-ball` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowling-ball?s=sharp-light bowling-ball}
 * @preview ![bowling-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bowling-ball.svg)
 */
const BowlingBall: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm240-72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-120-8a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM240 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default BowlingBall;