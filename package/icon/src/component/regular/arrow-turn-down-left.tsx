
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-left?s=regular arrow-turn-down-left}
 * @preview ![arrow-turn-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-turn-down-left.svg)
 */
const ArrowTurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 168c0 48.6-39.4 88-88 88L81.9 312l87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 305c-9.4-9.4-9.4-24.6 0-33.9L135 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87L424 264c22.1 0 40-17.9 40-40l0-168z" />
    </Icon>
);

export default ArrowTurnDownLeft;