
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-up?s=sharp-thin arrow-turn-up}
 * @preview ![arrow-turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-turn-up.svg)
 */
const ArrowTurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 496l-8 0 0 16 8 0 184 0 8 0 0-8 0-476.7L330.3 157.7l5.7 5.7L347.3 152l-5.7-5.7-144-144L192-3.3l-5.7 5.7-144 144L36.7 152 48 163.3l5.7-5.7L184 27.3 184 496 8 496z" />
    </Icon>
);

export default ArrowTurnUp;