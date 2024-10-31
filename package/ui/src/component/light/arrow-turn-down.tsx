
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down?s=light arrow-turn-down}
 * @preview ![arrow-turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-turn-down.svg)
 */
const ArrowTurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 32C7.2 32 0 24.8 0 16S7.2 0 16 0L128 0c44.2 0 80 35.8 80 80l0 377.4L308.7 356.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-128 128c-6.2 6.2-16.4 6.2-22.6 0l-128-128c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L176 457.4 176 80c0-26.5-21.5-48-48-48L16 32z" />
    </Icon>
);

export default ArrowTurnDown;