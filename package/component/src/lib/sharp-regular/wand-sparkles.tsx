
import { Icon } from "../../index";

/**
 * A component that renders the `wand-sparkles` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-sparkles?s=sharp-regular wand-sparkles}
 * @preview ![wand-sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wand-sparkles.svg)
 */
const WandSparkles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 476.1L112 512 78 478 34 434 0 400l35.9-32L96 314.3 96 256l65.3 0L448 0l64 64-64 71.7 0 56.3-50.3 0L144 476.1zM444.7 67.3L69.9 402 110 442.1 444.7 67.3zM432 448l-24-56-56-24 56-24 24-56 24 56 56 24-56 24-24 56zM56 168L0 144l56-24L80 64l24 56 56 24-56 24L80 224 56 168zM208 96L192 64 160 48l32-16L208 0l16 32 32 16L224 64 208 96z" />
    </Icon>
);

export default WandSparkles;