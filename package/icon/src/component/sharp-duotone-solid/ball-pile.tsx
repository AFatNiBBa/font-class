
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ball-pile` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ball-pile?s=sharp-duotone-solid ball-pile}
 * @preview ![ball-pile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ball-pile.svg)
 */
const BallPile: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 432a80 80 0 1 0 160 0A80 80 0 1 0 0 432zM208 80a80 80 0 1 0 160 0A80 80 0 1 0 208 80zm0 352a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm208 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M176 328a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm224 0a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
    </Icon>
);

export default BallPile;