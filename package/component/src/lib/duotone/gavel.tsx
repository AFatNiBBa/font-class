
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gavel` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gavel?s=duotone gavel}
 * @preview ![gavel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gavel.svg)
 */
const Gavel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 432c0 8.2 3.1 16.4 9.4 22.6l48 48c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l112-112c12.5-12.5 12.5-32.8 0-45.3l-1.4-1.4 81.4-81.4c-15.1-15.1-30.2-30.2-45.3-45.3L168 298.7l-1.4-1.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112C3.1 415.6 0 423.8 0 432z" />
        <path d="M273.4 9.4c12.5-12.5 32.8-12.5 45.3 0l16 16c12.5 12.5 12.5 32.8 0 45.3l-4 4L437.4 181.4l4-4c12.5-12.5 32.8-12.5 45.3 0l16 16c12.5 12.5 12.5 32.8 0 45.3l-120 120c-12.5 12.5-32.8 12.5-45.3 0l-16-16c-12.5-12.5-12.5-32.8 0-45.3l4-4L218.6 186.6l-4 4c-12.5 12.5-32.8 12.5-45.3 0l-16-16c-12.5-12.5-12.5-32.8 0-45.3l120-120z" />
    </Icon>
);

export default Gavel;