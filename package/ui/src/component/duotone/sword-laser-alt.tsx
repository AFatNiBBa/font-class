
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sword-laser-alt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sword-laser-alt?s=duotone sword-laser-alt}
 * @preview ![sword-laser-alt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sword-laser-alt.svg)
 */
const SwordLaserAlt: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M198.9 256L304 256c.7 0 1.3 0 2 .1s1.3 .2 1.9 .3L505.7 40.2c8.7-9.5 8.3-24.1-.7-33.2s-23.7-9.4-33.2-.7L198.9 256z" />
        <path d="M155.3 270.1c9-9 21.2-14.1 33.9-14.1L304 256c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4L193 405.7l-27.3-27.3-32-32L106.3 319l49-49zM95 330.3L116.7 352 11 457.7l-3.5-3.5C2.7 449.3 0 442.8 0 436s2.7-13.3 7.5-18.1L95 330.3zM22.3 469L128 363.3 148.7 384 43 489.7 22.3 469zm32 32L160 395.3 181.7 417 94.1 504.5C89.3 509.3 82.8 512 76 512s-13.3-2.7-18.1-7.5L54.3 501z" />
    </Icon>
);

export default SwordLaserAlt;