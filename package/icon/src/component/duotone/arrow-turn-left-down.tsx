
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-turn-left-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-left-down?s=duotone arrow-turn-left-down}
 * @preview ![arrow-turn-left-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-turn-left-down.svg)
 */
const ArrowTurnLeftDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 96l0 306.7c10.7 10.7 21.3 21.3 32 32c10.7-10.7 21.3-21.3 32-32L224 96c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L256 0c-53 0-96 43-96 96z" />
        <path d="M342.6 329.4c12.5 12.5 12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 434.7 297.4 329.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </Icon>
);

export default ArrowTurnLeftDown;