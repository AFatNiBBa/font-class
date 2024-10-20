
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-left?s=regular arrow-turn-left}
 * @preview ![arrow-turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-turn-left.svg)
 */
const ArrowTurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M135 369c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-87-87L424 248c22.1 0 40 17.9 40 40l0 168c0 13.3 10.7 24 24 24s24-10.7 24-24l0-168c0-48.6-39.4-88-88-88L81.9 200l87-87c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 207c-9.4 9.4-9.4 24.6 0 33.9L135 369z" />
    </Icon>
);

export default ArrowTurnLeft;