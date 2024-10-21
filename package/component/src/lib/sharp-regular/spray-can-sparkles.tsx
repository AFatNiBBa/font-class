
import { Icon } from "../../index";

/**
 * A component that renders the `spray-can-sparkles` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spray-can-sparkles?s=sharp-regular spray-can-sparkles}
 * @preview ![spray-can-sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/spray-can-sparkles.svg)
 */
const SprayCanSparkles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 0L224 0l0 128L96 128 96 0zm0 208c-26.5 0-48 21.5-48 48l0 208 224 0 0-208c0-26.5-21.5-48-48-48L96 208zM0 256c0-53 43-96 96-96l128 0c53 0 96 43 96 96l0 208 0 48-48 0L48 512 0 512l0-48L0 256zm160 16a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM320 32L336 0l16 32 32 16L352 64 336 96 320 64 288 48l32-16zm64 96l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16zM464 0l16 32 32 16L480 64 464 96 448 64 416 48l32-16L464 0zM416 240l32-16 16-32 16 32 32 16-32 16-16 32-16-32-32-16z" />
    </Icon>
);

export default SprayCanSparkles;