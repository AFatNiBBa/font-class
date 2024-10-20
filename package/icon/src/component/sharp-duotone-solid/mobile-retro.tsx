
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-retro` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-retro?s=sharp-duotone-solid mobile-retro}
 * @preview ![mobile-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mobile-retro.svg)
 */
const MobileRetro: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 0L320 0l0 512L0 512 0 0zM56 304l0 48 48 0 0-48-48 0zm0 80l0 48 48 0 0-48-48 0zm8-256l0 128 192 0 0-128L64 128zm48-80l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zm24 256l0 48 48 0 0-48-48 0zm0 80l0 48 48 0 0-48-48 0zm80-80l0 48 48 0 0-48-48 0zm0 80l0 48 48 0 0-48-48 0z" />
        <path d="M64 128H256V256H64V128z" />
    </Icon>
);

export default MobileRetro;