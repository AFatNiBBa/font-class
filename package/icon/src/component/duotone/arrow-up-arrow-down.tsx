
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-arrow-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-arrow-down?s=duotone arrow-up-arrow-down}
 * @preview ![arrow-up-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-up-arrow-down.svg)
 */
const ArrowUpArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 352c0 8.2 3.1 16.4 9.4 22.6l96 96c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l96-96c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6c-12.5-12.5-32.8-12.5-45.3 0L448 370.7 448 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0c-6.2 6.2-9.4 14.4-9.4 22.6z" />
        <path d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 141.3 192 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-306.7L86.6 182.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96z" />
    </Icon>
);

export default ArrowUpArrowDown;