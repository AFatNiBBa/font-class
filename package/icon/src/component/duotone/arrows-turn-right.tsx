
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-turn-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-turn-right?s=duotone arrows-turn-right}
 * @preview ![arrows-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-turn-right.svg)
 */
const ArrowsTurnRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-17.7 14.3-32 32-32l146.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-96-96c-6.2-6.2-14.4-9.4-22.6-9.4s-16.4 3.1-22.6 9.4c-12.5 12.5-12.5 32.8 0 45.3L242.7 352 96 352c-53 0-96 43-96 96z" />
        <path d="M342.6 9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 128 96C57.3 96 0 153.3 0 224l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-35.3 28.7-64 64-64l210.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96z" />
    </Icon>
);

export default ArrowsTurnRight;