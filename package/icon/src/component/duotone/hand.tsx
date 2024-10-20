
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand?s=duotone hand}
 * @preview ![hand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand.svg)
 */
const Hand: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M11 284.4c-15.2 16-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 272c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4zM192 336c0-8.8 7.2-16 16-16l8 0 152 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-77 0c17.9 18.7 29 44.1 29 72l0 8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-8c0-39.8-32.2-72-72-72l-8 0c-8.8 0-16-7.2-16-16z" />
        <path d="M208 320c-8.8 0-16 7.2-16 16s7.2 16 16 16l8 0c39.8 0 72 32.2 72 72l0 8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-8c0-27.9-11-53.3-29-72l77 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-152 0-8 0z" />
    </Icon>
);

export default Hand;