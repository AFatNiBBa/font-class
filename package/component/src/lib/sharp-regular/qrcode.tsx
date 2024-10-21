
import { Icon } from "../../index";

/**
 * A component that renders the `qrcode` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/qrcode?s=sharp-regular qrcode}
 * @preview ![qrcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/qrcode.svg)
 */
const Qrcode: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l0 96 96 0 0-96L48 80zM0 32l48 0 96 0 48 0 0 48 0 96 0 48-48 0-96 0L0 224l0-48L0 80 0 32zM48 336l0 96 96 0 0-96-96 0zM0 288l48 0 96 0 48 0 0 48 0 96 0 48-48 0-96 0L0 480l0-48 0-96 0-48zM400 80l-96 0 0 96 96 0 0-96zM304 32l96 0 48 0 0 48 0 96 0 48-48 0-96 0-48 0 0-48 0-96 0-48 48 0zm80 416l0 32-32 0 0-32 32 0zm32 0l32 0 0 32-32 0 0-32zm32-160l0 32 0 96-96 0 0-32-32 0 0 96-64 0 0-96 0-96 96 0 0 32 64 0 0-32 32 0zM120 104l0 48-48 0 0-48 48 0zM72 360l48 0 0 48-48 0 0-48zM376 104l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default Qrcode;