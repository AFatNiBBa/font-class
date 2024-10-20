
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-left?s=light arrow-turn-down-left}
 * @preview ![arrow-turn-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-turn-down-left.svg)
 */
const ArrowTurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 176c0 44.2-35.8 80-80 80L54.6 304 155.3 404.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-128-128c-6.2-6.2-6.2-16.4 0-22.6l128-128c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 272 432 272c26.5 0 48-21.5 48-48l0-176z" />
    </Icon>
);

export default ArrowTurnDownLeft;