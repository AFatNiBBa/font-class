
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wand-sparkles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-sparkles?s=sharp-duotone-solid wand-sparkles}
 * @preview ![wand-sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wand-sparkles.svg)
 */
const WandSparkles: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 144l56 24 24 56 24-56 56-24-56-24L80 64 56 120 0 144zM160 48l32 16 16 32 16-32 32-16L224 32 208 0 192 32 160 48zM352 368l56 24 24 56 24-56 56-24-56-24-24-56-24 56-56 24z" />
        <path d="M80 512L0 432 128 316.8l0-60.8 67.6 0L480 0l32 32L416 138.7l0 53.3-48 0L80 512z" />
    </Icon>
);

export default WandSparkles;