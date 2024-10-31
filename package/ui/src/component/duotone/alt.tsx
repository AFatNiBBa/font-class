
import { Icon, generic } from "../../index";

/**
 * A component that renders the `alt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alt?s=duotone alt}
 * @preview ![alt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/alt.svg)
 */
const Alt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M416 416c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32z" />
        <path d="M423 76c6.1-7.6 15.3-12 25-12l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-144.6 0L217 436c-6.1 7.6-15.3 12-25 12L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l144.6 0L423 76z" />
    </Icon>
);

export default Alt;