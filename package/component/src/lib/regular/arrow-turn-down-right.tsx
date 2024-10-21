
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-right?s=regular arrow-turn-down-right}
 * @preview ![arrow-turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-turn-down-right.svg)
 */
const ArrowTurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56L0 224c0 48.6 39.4 88 88 88l342.1 0-87 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L505 305c9.4-9.4 9.4-24.6 0-33.9L377 143c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l87 87L88 264c-22.1 0-40-17.9-40-40L48 56z" />
    </Icon>
);

export default ArrowTurnDownRight;