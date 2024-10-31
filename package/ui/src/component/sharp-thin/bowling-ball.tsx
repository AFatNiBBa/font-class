
import { Icon } from "../../index";

/**
 * A component that renders the `bowling-ball` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowling-ball?s=sharp-thin bowling-ball}
 * @preview ![bowling-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bowling-ball.svg)
 */
const BowlingBall: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm240-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm16 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM112 176a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM240 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm16 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default BowlingBall;