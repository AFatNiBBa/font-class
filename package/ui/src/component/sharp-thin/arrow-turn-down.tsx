
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down?s=sharp-thin arrow-turn-down}
 * @preview ![arrow-turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrow-turn-down.svg)
 */
const ArrowTurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 16L0 16 0 0 8 0 192 0l8 0 0 8 0 476.7L330.3 354.3l5.7-5.7L347.3 360l-5.7 5.7-144 144-5.7 5.7-5.7-5.7-144-144L36.7 360 48 348.7l5.7 5.7L184 484.7 184 16 8 16z" />
    </Icon>
);

export default ArrowTurnDown;