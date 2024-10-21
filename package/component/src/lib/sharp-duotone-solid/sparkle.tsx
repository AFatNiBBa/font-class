
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sparkle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkle?s=sharp-duotone-solid sparkle}
 * @preview ![sparkle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sparkle.svg)
 */
const Sparkle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M149.3 181.3L224 32l74.7 149.3L448 256 298.7 330.7 224 480 149.3 330.7 0 256l149.3-74.7z" />
    </Icon>
);

export default Sparkle;