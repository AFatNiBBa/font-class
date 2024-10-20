
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angles-up-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-up-down?s=duotone angles-up-down}
 * @preview ![angles-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/angles-up-down.svg)
 */
const AnglesUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M39 332c-11 13.8-8.8 33.9 5 45L204 505c5.8 4.7 12.9 7 20 7s14.1-2.3 20-7L404 377c13.8-11 16-31.2 5-45s-31.2-16-45-5L224 439 84 327c-5.9-4.7-13-7-20-7c-9.4 0-18.7 4.1-25 12z" />
        <path d="M204 7c11.7-9.3 28.3-9.3 40 0L404 135c13.8 11 16 31.2 5 45s-31.2 16-45 5L224 73 84 185c-13.8 11-33.9 8.8-45-5s-8.8-33.9 5-45L204 7z" />
    </Icon>
);

export default AnglesUpDown;