
import { Icon } from "../../index";

/**
 * A component that renders the `pool-8-ball` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pool-8-ball?s=light pool-8-ball}
 * @preview ![pool-8-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pool-8-ball.svg)
 */
const Pool_8Ball: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm368-64a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zm-256 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-32a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm37.3 14.2C304.8 184.5 312 199.4 312 216c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-16.6 7.2-31.5 18.7-41.8C212 166 208 155.5 208 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 11.5-4 22-10.7 30.2zM256 192a24 24 0 1 0 0 48 24 24 0 1 0 0-48z" />
    </Icon>
);

export default Pool_8Ball;