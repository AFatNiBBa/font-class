
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pallet-boxes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-boxes?s=sharp-duotone-solid pallet-boxes}
 * @preview ![pallet-boxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pallet-boxes.svg)
 */
const PalletBoxes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 64 32 0 32 0 0 64-32 0L0 448l0 64 32 0 32 0 32 0 32 0 160 0 32 0 32 0 160 0 32 0 32 0 32 0 32 0 0-64-32 0-32 0 0-64 32 0 32 0 0-64-32 0-32 0-32 0-32 0-160 0-32 0-32 0-160 0-32 0-32 0-32 0L0 320zm128 64l160 0 0 64-160 0 0-64zm224 0l160 0 0 64-160 0 0-64z" />
        <path d="M320 0L64 0l0 256 256 0L320 0zM576 64L384 64l0 192 192 0 0-192z" />
    </Icon>
);

export default PalletBoxes;