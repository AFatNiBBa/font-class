
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowling-ball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowling-ball?s=duotone bowling-ball}
 * @preview ![bowling-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bowling-ball.svg)
 */
const BowlingBall: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 176a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm96-64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM208 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-64-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default BowlingBall;