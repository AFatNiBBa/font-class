
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-right?s=thin arrow-turn-down-right}
 * @preview ![arrow-turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-turn-down-right.svg)
 */
const ArrowTurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 224c0 39.8 32.2 72 72 72l412.7 0L346.3 434.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l152-152c3.1-3.1 3.1-8.2 0-11.3l-152-152c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L484.7 280 72 280c-30.9 0-56-25.1-56-56L16 40z" />
    </Icon>
);

export default ArrowTurnDownRight;