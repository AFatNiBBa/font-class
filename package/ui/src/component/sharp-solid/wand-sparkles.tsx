
import { Icon } from "../../index";

/**
 * A component that renders the `wand-sparkles` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-sparkles?s=sharp-solid wand-sparkles}
 * @preview ![wand-sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/wand-sparkles.svg)
 */
const WandSparkles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 432l80 80L368 192l48 0 0-53.3L512 32 480 0 195.6 256 128 256l0 60.8L0 432zm432 16l24-56 56-24-56-24-24-56-24 56-56 24 56 24 24 56zM56 168l24 56 24-56 56-24-56-24L80 64 56 120 0 144l56 24zM208 96l16-32 32-16L224 32 208 0 192 32 160 48l32 16 16 32z" />
    </Icon>
);

export default WandSparkles;