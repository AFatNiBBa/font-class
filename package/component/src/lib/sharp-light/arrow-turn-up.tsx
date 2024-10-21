
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-up?s=sharp-light arrow-turn-up}
 * @preview ![arrow-turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-turn-up.svg)
 */
const ArrowTurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 480L0 480l0 32 16 0 176 0 16 0 0-16 0-441.4L308.7 155.3 320 166.6 342.6 144l-11.3-11.3-128-128L192-6.6 180.7 4.7l-128 128L41.4 144 64 166.6l11.3-11.3L176 54.6 176 480 16 480z" />
    </Icon>
);

export default ArrowTurnUp;