
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pallet-box` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-box?s=sharp-duotone-solid pallet-box}
 * @preview ![pallet-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pallet-box.svg)
 */
const PalletBox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 64 32 0 32 0 0 64-32 0L0 448l0 64 32 0 64 0 224 0 224 0 64 0 32 0 0-64-32 0-32 0 0-64 32 0 32 0 0-64-32 0-64 0-224 0L96 320l-64 0L0 320zm128 64l160 0 0 64-160 0 0-64zM256 0l0 128 64-48 64 48L384 0 256 0zm96 384l160 0 0 64-160 0 0-64z" />
        <path d="M256 0L128 0l0 256 384 0L512 0 384 0l0 128L320 80l-64 48L256 0z" />
    </Icon>
);

export default PalletBox;