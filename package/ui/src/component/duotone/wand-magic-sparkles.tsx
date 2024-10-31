
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wand-magic-sparkles` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-magic-sparkles?s=duotone wand-magic-sparkles}
 * @preview ![wand-magic-sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wand-magic-sparkles.svg)
 */
const WandMagicSparkles: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128c0 4.8 3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2C3 118.9 0 123.2 0 128zM192 64c0 3.2 2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7 197 56.8c-3 1.1-5 4-5 7.2zm124.7 60.7c13.2 13.2 26.4 26.4 39.6 39.6l105-105 23.3 23.3-105 105c13.2 13.2 26.4 26.4 39.6 39.6c36.9-36.9 73.8-73.8 110.7-110.7c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0C390.5 51 353.6 87.8 316.7 124.7zM352 384c0 4.8 3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2c-4.5 1.7-7.5 6-7.5 10.8z" />
        <path d="M419.2 227.2L316.7 124.7 46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L419.2 227.2z" />
    </Icon>
);

export default WandMagicSparkles;