
import { Icon, generic } from "../../index";

/**
 * A component that renders the `swords-laser` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swords-laser?s=sharp-duotone-solid swords-laser}
 * @preview ![swords-laser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/swords-laser.svg)
 */
const SwordsLaser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 32L160 0 384 202.7l0 112.3L128 32zm91.6 203.6L247 210.8l51.9 56.7L224 350.3 224 240l-4.4-4.4zm124-112.2L480 0l32 32L390.5 166.3l-46.9-42.9z" />
        <path d="M640 432l-18.3 18.3L523.3 352l18.3-18.3L640 432zM512 363.3l98.3 98.3-20.7 20.7L491.3 384 512 363.3zM560 512l-98.3-98.3L480 395.3l98.3 98.3L560 512zM474.3 378.3l-24 24L384 336l0-144 14.7-1.2L530.3 322.3l-24 24-32 32zM80 512L0 432 129.4 302.6l-8-8c-12.5-12.5-12.5-32.8 0-45.3c12.4-12.4 32.5-12.5 45-.2l8.2 8.2L208 224l16 16 0 128L80 512zM184 344a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default SwordsLaser;