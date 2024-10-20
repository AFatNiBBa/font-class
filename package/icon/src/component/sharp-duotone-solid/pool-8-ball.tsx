
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pool-8-ball` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pool-8-ball?s=sharp-duotone-solid pool-8-ball}
 * @preview ![pool-8-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pool-8-ball.svg)
 */
const Pool_8Ball: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M200 216c0 30.9 25.1 56 56 56s56-25.1 56-56c0-16.6-7.2-31.5-18.7-41.8C300 166 304 155.5 304 144c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 11.5 4 22 10.7 30.2C207.2 184.5 200 199.4 200 216zm80 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-8-72a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-448a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
    </Icon>
);

export default Pool_8Ball;