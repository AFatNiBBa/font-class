
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-left?s=light arrow-turn-left}
 * @preview ![arrow-turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-turn-left.svg)
 */
const ArrowTurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M132.7 363.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 240 432 240c26.5 0 48 21.5 48 48l0 176c0 8.8 7.2 16 16 16s16-7.2 16-16l0-176c0-44.2-35.8-80-80-80L54.6 208 155.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6l128 128z" />
    </Icon>
);

export default ArrowTurnLeft;