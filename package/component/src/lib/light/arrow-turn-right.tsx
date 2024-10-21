
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-right?s=light arrow-turn-right}
 * @preview ![arrow-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-turn-right.svg)
 */
const ArrowTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M379.3 363.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L457.4 240 80 240c-26.5 0-48 21.5-48 48l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16L0 288c0-44.2 35.8-80 80-80l377.4 0L356.7 107.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l128 128c6.2 6.2 6.2 16.4 0 22.6l-128 128z" />
    </Icon>
);

export default ArrowTurnRight;