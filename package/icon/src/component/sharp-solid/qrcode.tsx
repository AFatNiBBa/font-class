
import { Icon } from "../../index";

/**
 * A component that renders the `qrcode` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/qrcode?s=sharp-solid qrcode}
 * @preview ![qrcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/qrcode.svg)
 */
const Qrcode: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 32L0 32 0 224l192 0 0-192zM128 96l0 64-64 0 0-64 64 0zm64 192L0 288 0 480l192 0 0-192zm-64 64l0 64-64 0 0-64 64 0zM256 32l0 192 192 0 0-192L256 32zm64 64l64 0 0 64-64 0 0-64zm32 352l0 32 32 0 0-32-32 0zm96 0l-32 0 0 32 32 0 0-32zM416 288l0 32-64 0 0-32-96 0 0 96 0 96 64 0 0-96 32 0 0 32 96 0 0-64 0-32 0-32-32 0z" />
    </Icon>
);

export default Qrcode;