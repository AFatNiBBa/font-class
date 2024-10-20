
import { Icon } from "../../index";

/**
 * A component that renders the `pallet-boxes` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-boxes?s=sharp-solid pallet-boxes}
 * @preview ![pallet-boxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pallet-boxes.svg)
 */
const PalletBoxes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 0L320 0l0 256L64 256 64 0zM384 64l192 0 0 192-192 0 0-192zM0 320l32 0 32 0 32 0 32 0 160 0 32 0 32 0 160 0 32 0 32 0 32 0 32 0 0 64-32 0-32 0 0 64 32 0 32 0 0 64-32 0-32 0-32 0-32 0-160 0-32 0-32 0-160 0-32 0-32 0-32 0L0 512l0-64 32 0 32 0 0-64-32 0L0 384l0-64zM128 448l160 0 0-64-160 0 0 64zm224 0l160 0 0-64-160 0 0 64z" />
    </Icon>
);

export default PalletBoxes;