
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wand-magic-sparkles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-magic-sparkles?s=sharp-duotone-solid wand-magic-sparkles}
 * @preview ![wand-magic-sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wand-magic-sparkles.svg)
 */
const WandMagicSparkles: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128L64 96 96 32l32 64 64 32-64 32L96 224 64 160 0 128zM192 64l42.7-21.3L256 0l21.3 42.7L320 64 277.3 85.3 256 128 234.7 85.3 192 64zm120 56l80.4-80.4L432 0l39.6 39.6 32.8 32.8L544 112l-39.6 39.6L424 232l-39.6-39.6L464.8 112 432 79.2l-80.4 80.4c-13.2-13.2-26.4-26.4-39.6-39.6zm40 264l64-32 32-64 32 64 64 32-64 32-32 64-32-64-64-32z" />
        <path d="M424 232L312 120 32 400 144 512 424 232z" />
    </Icon>
);

export default WandMagicSparkles;