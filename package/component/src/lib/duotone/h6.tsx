
import { Icon, generic } from "../../index";

/**
 * A component that renders the `h6` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h6?s=duotone h6}
 * @preview ![h6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/h6.svg)
 */
const H6: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 256 0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 192 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 224 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96z" />
        <path d="M537 116c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5L389 198.5c-24 29.9-37 67.1-37 105.5c0 79.5 64.5 144 144 144s144-64.5 144-144c0-77.6-61.4-140.9-138.3-143.9L537 116zm39 188a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
    </Icon>
);

export default H6;