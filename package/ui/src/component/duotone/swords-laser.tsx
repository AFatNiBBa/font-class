
import { Icon, generic } from "../../index";

/**
 * A component that renders the `swords-laser` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swords-laser?s=duotone swords-laser}
 * @preview ![swords-laser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/swords-laser.svg)
 */
const SwordsLaser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 24c0 5.8 2.1 11.6 6.3 16.2L384 313.1 384 208l0-4.3L168.2 6.3C158.7-2.4 144.1-2.1 135 7c-4.7 4.7-7 10.8-7 17zm94.9 210c.7 1.9 1.1 3.9 1.1 5.9l0 108.1 74.3-81.2-50.7-55.5-24.7 22.6zM343.7 123.5l46.7 42.7 115.3-126c8.7-9.5 8.3-24.1-.7-33.2s-23.7-9.4-33.2-.7L343.7 123.5z" />
        <path d="M384 322.7c0 12.7 5.1 24.9 14.1 33.9l49 49 27.3-27.3 32-32L533.7 319 411.3 196.7c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8l0 114.7zM545.9 504.5c4.8 4.8 11.3 7.5 18.1 7.5s13.3-2.7 18.1-7.5l3.5-3.5L480 395.3 458.3 417l87.5 87.5zM617.7 469L512 363.3 491.3 384 597 489.7 617.7 469zm14.8-14.8c4.8-4.8 7.5-11.3 7.5-18.1s-2.7-13.3-7.5-18.1L545 330.3 523.3 352 629 457.7l3.5-3.5zM224 240c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-25.4 25.4-4.9-4.9c-12.5-12.3-32.6-12.2-45 .2c-12.5 12.5-12.5 32.8 0 45.3l4.7 4.7L7.5 417.9C2.7 422.7 0 429.2 0 436s2.7 13.3 7.5 18.1l50.3 50.3c4.8 4.8 11.3 7.5 18.1 7.5s13.3-2.7 18.1-7.5L209.9 388.7c9-9 14.1-21.2 14.1-33.9L224 240zM152 344a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default SwordsLaser;