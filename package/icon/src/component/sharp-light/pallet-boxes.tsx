
import { Icon } from "../../index";

/**
 * A component that renders the `pallet-boxes` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-boxes?s=sharp-light pallet-boxes}
 * @preview ![pallet-boxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/pallet-boxes.svg)
 */
const PalletBoxes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 32L96 32l0 224 224 0 0-224zM96 0L320 0l32 0 0 32 0 224 0 32-32 0L96 288l-32 0 0-32L64 32 64 0 96 0zM544 128l-128 0 0 128 128 0 0-128zM416 96l128 0 32 0 0 32 0 128 0 32-32 0-128 0-32 0 0-32 0-128 0-32 32 0zM0 352l16 0 48 0 16 0 16 0 208 0 16 0 16 0 208 0 16 0 16 0 48 0 16 0 0 32-16 0-48 0 0 96 48 0 16 0 0 32-16 0-48 0-16 0-16 0-208 0-16 0-16 0L96 512l-16 0-16 0-48 0L0 512l0-32 16 0 48 0 0-96-48 0L0 384l0-32zM96 480l208 0 0-96L96 384l0 96zm240 0l208 0 0-96-208 0 0 96z" />
    </Icon>
);

export default PalletBoxes;