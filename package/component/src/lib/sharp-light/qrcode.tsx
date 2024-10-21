
import { Icon } from "../../index";

/**
 * A component that renders the `qrcode` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/qrcode?s=sharp-light qrcode}
 * @preview ![qrcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/qrcode.svg)
 */
const Qrcode: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 64l0 128L32 192 32 64l128 0zM32 32L0 32 0 64 0 192l0 32 32 0 128 0 32 0 0-32 0-128 0-32-32 0L32 32zM160 320l0 128L32 448l0-128 128 0zM32 288L0 288l0 32L0 448l0 32 32 0 128 0 32 0 0-32 0-128 0-32-32 0L32 288zM288 64l128 0 0 128-128 0 0-128zM256 32l0 32 0 128 0 32 32 0 128 0 32 0 0-32 0-128 0-32-32 0L288 32l-32 0zm0 256l0 16 0 160 0 16 32 0 0-16 0-144 32 0 0 68 0 16 16 0 96 0 16 0 0-16 0-84 0-16-32 0 0 16 0 68-64 0 0-68 0-16-16 0-64 0-16 0zM120 104l-48 0 0 48 48 0 0-48zM72 360l0 48 48 0 0-48-48 0zM376 104l-48 0 0 48 48 0 0-48zM320 432l0 48 48 0 0-48-48 0zm128 0l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default Qrcode;