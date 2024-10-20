
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-up-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-down?s=duotone arrows-up-down}
 * @preview ![arrows-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-up-down.svg)
 */
const ArrowsUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M32 384c0 8.2 3.1 16.4 9.4 22.6l96 96c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l96-96c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6c-12.5-12.5-32.8-12.5-45.3 0L192 402.7 192 256l-64 0 0 146.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0C35.1 367.6 32 375.8 32 384z" />
        <path d="M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3 128 256l64 0 0-146.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z" />
    </Icon>
);

export default ArrowsUpDown;