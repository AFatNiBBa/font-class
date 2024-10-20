
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-left?s=thin arrow-turn-left}
 * @preview ![arrow-turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/arrow-turn-left.svg)
 */
const ArrowTurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M154.3 381.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L27.3 232 440 232c30.9 0 56 25.1 56 56l0 184c0 4.4 3.6 8 8 8s8-3.6 8-8l0-184c0-39.8-32.2-72-72-72L27.3 216 165.7 77.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-152 152c-3.1 3.1-3.1 8.2 0 11.3l152 152z" />
    </Icon>
);

export default ArrowTurnLeft;