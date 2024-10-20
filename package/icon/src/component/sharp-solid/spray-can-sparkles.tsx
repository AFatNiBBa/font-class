
import { Icon } from "../../index";

/**
 * A component that renders the `spray-can-sparkles` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spray-can-sparkles?s=sharp-solid spray-can-sparkles}
 * @preview ![spray-can-sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/spray-can-sparkles.svg)
 */
const SprayCanSparkles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 0l0 128 128 0L224 0 96 0zm0 160c-53 0-96 43-96 96L0 512l320 0 0-256c0-53-43-96-96-96L96 160zm64 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM320 32L288 48l32 16 16 32 16-32 32-16L352 32 336 0 320 32zm64 96l-32 16 32 16 16 32 16-32 32-16-32-16L400 96l-16 32zM464 0L448 32 416 48l32 16 16 32 16-32 32-16L480 32 464 0zM448 224l-32 16 32 16 16 32 16-32 32-16-32-16-16-32-16 32z" />
    </Icon>
);

export default SprayCanSparkles;