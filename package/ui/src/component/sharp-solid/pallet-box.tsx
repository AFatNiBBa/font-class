
import { Icon } from "../../index";

/**
 * A component that renders the `pallet-box` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-box?s=sharp-solid pallet-box}
 * @preview ![pallet-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pallet-box.svg)
 */
const PalletBox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 0L256 0l0 128 64-48 64 48L384 0 512 0l0 256-384 0L128 0zM0 320l32 0 32 0 32 0 32 0 160 0 32 0 32 0 160 0 32 0 32 0 32 0 32 0 0 64-32 0-32 0 0 64 32 0 32 0 0 64-32 0-32 0-32 0-32 0-160 0-32 0-32 0-160 0-32 0-32 0-32 0L0 512l0-64 32 0 32 0 0-64-32 0L0 384l0-64zM128 448l160 0 0-64-160 0 0 64zm224 0l160 0 0-64-160 0 0 64z" />
    </Icon>
);

export default PalletBox;