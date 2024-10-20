
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-up?s=light arrow-turn-up}
 * @preview ![arrow-turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-turn-up.svg)
 */
const ArrowTurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l112 0c44.2 0 80-35.8 80-80l0-377.4L308.7 155.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-128-128c-6.2-6.2-16.4-6.2-22.6 0l-128 128c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L176 54.6 176 432c0 26.5-21.5 48-48 48L16 480z" />
    </Icon>
);

export default ArrowTurnUp;