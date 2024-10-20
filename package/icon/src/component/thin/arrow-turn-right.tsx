
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-right?s=thin arrow-turn-right}
 * @preview ![arrow-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-turn-right.svg)
 */
const ArrowTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M357.7 381.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L484.7 232 72 232c-30.9 0-56 25.1-56 56l0 184c0 4.4-3.6 8-8 8s-8-3.6-8-8L0 288c0-39.8 32.2-72 72-72l412.7 0L346.3 77.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l152 152c3.1 3.1 3.1 8.2 0 11.3l-152 152z" />
    </Icon>
);

export default ArrowTurnRight;