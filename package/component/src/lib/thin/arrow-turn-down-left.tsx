
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-left?s=thin arrow-turn-down-left}
 * @preview ![arrow-turn-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-turn-down-left.svg)
 */
const ArrowTurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 40c0-4.4 3.6-8 8-8s8 3.6 8 8l0 184c0 39.8-32.2 72-72 72L27.3 296 165.7 434.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-152-152c-3.1-3.1-3.1-8.2 0-11.3l152-152c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L27.3 280 440 280c30.9 0 56-25.1 56-56l0-184z" />
    </Icon>
);

export default ArrowTurnDownLeft;