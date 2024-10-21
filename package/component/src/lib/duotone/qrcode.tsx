
import { Icon, generic } from "../../index";

/**
 * A component that renders the `qrcode` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/qrcode?s=duotone qrcode}
 * @preview ![qrcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/qrcode.svg)
 */
const Qrcode: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 80l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L48 32C21.5 32 0 53.5 0 80zM0 336l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48zM64 96l64 0 0 64-64 0 0-64zm0 256l64 0 0 64-64 0 0-64zM256 80l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-96 0c-26.5 0-48 21.5-48 48zm64 16l64 0 0 64-64 0 0-64z" />
        <path d="M256 464l0-160c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16l0 96c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm128 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
    </Icon>
);

export default Qrcode;