
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spray-can-sparkles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spray-can-sparkles?s=sharp-duotone-solid spray-can-sparkles}
 * @preview ![spray-can-sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/spray-can-sparkles.svg)
 */
const SprayCanSparkles: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M80 336a80 80 0 1 0 160 0A80 80 0 1 0 80 336zM288 48l32 16 16 32 16-32 32-16L352 32 336 0 320 32 288 48zm64 96l32 16 16 32 16-32 32-16-32-16L400 96l-16 32-32 16zm64-96l32 16 16 32 16-32 32-16L480 32 464 0 448 32 416 48zm0 192l32 16 16 32 16-32 32-16-32-16-16-32-16 32-32 16z" />
        <path d="M224 0l0 128L96 128 96 0 224 0zM0 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 256L0 512 0 256zm240 80A80 80 0 1 0 80 336a80 80 0 1 0 160 0z" />
    </Icon>
);

export default SprayCanSparkles;