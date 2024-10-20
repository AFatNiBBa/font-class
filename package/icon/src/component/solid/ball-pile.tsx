
import { Icon } from "../../index";

/**
 * A component that renders the `ball-pile` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ball-pile?s=solid ball-pile}
 * @preview ![ball-pile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/ball-pile.svg)
 */
const BallPile: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 160A80 80 0 1 0 288 0a80 80 0 1 0 0 160zM176 328a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM160 432A80 80 0 1 0 0 432a80 80 0 1 0 160 0zm128 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm288-80a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM400 328a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
    </Icon>
);

export default BallPile;