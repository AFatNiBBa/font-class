
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down-right?s=light arrow-turn-down-right}
 * @preview ![arrow-turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-turn-down-right.svg)
 */
const ArrowTurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48L0 224c0 44.2 35.8 80 80 80l377.4 0L356.7 404.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128c6.2-6.2 6.2-16.4 0-22.6l-128-128c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 272 80 272c-26.5 0-48-21.5-48-48L32 48z" />
    </Icon>
);

export default ArrowTurnDownRight;