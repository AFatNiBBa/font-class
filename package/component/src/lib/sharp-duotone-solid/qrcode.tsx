
import { Icon, generic } from "../../index";

/**
 * A component that renders the `qrcode` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/qrcode?s=sharp-duotone-solid qrcode}
 * @preview ![qrcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/qrcode.svg)
 */
const Qrcode: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 224l192 0 0-192L0 32zM0 288L0 480l192 0 0-192L0 288zM64 96l64 0 0 64-64 0 0-64zm0 256l64 0 0 64-64 0 0-64zM256 32l0 192 192 0 0-192L256 32zm64 64l64 0 0 64-64 0 0-64z" />
        <path d="M256 288l96 0 0 32 64 0 0-32 32 0 0 32 0 96-96 0 0-32-32 0 0 96-64 0 0-96 0-96zM384 448l0 32-32 0 0-32 32 0zm64 0l0 32-32 0 0-32 32 0z" />
    </Icon>
);

export default Qrcode;