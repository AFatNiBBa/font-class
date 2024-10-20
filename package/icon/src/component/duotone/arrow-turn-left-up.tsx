
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-left-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-left-up?s=duotone arrow-turn-left-up}
 * @preview ![arrow-turn-left-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-turn-left-up.svg)
 */
const ArrowTurnLeftUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 112l0 306.7c0 53 43 96 96 96l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32-14.3-32-32L224 112 192 80l-32 32z" />
        <path d="M342.6 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 77.3 297.4 182.6c12.5 12.5 32.8 12.5 45.3 0z" />
    </Icon>
);

export default ArrowTurnLeftUp;