
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down?s=sharp-light arrow-turn-down}
 * @preview ![arrow-turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-turn-down.svg)
 */
const ArrowTurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 32L0 32 0 0 16 0 192 0l16 0 0 16 0 441.4L308.7 356.7 320 345.4 342.6 368l-11.3 11.3-128 128L192 518.6l-11.3-11.3-128-128L41.4 368 64 345.4l11.3 11.3L176 457.4 176 32 16 32z" />
    </Icon>
);

export default ArrowTurnDown;