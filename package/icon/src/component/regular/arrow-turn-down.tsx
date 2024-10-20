
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down?s=regular arrow-turn-down}
 * @preview ![arrow-turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-turn-down.svg)
 */
const ArrowTurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 48C10.7 48 0 37.3 0 24S10.7 0 24 0L128 0c48.6 0 88 39.4 88 88l0 342.1 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L209 505c-9.4 9.4-24.6 9.4-33.9 0L47 377c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87L168 88c0-22.1-17.9-40-40-40L24 48z" />
    </Icon>
);

export default ArrowTurnDown;