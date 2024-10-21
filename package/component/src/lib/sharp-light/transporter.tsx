
import { Icon } from "../../index";

/**
 * A component that renders the `transporter` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter?s=sharp-light transporter}
 * @preview ![transporter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/transporter.svg)
 */
const Transporter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 16l0 16 16 0 16 0 0 32-16 0-16 0 0 16 0 16-32 0 0-16 0-16-16 0-16 0 0-32 16 0 16 0 0-16 0-16 32 0 0 16zM64 80l0 16 16 0 16 0 0 32-16 0-16 0 0 16 0 16-32 0 0-16 0-16-16 0L0 128 0 96l16 0 16 0 0-16 0-16 32 0 0 16zm192 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112A56 56 0 1 1 256 0zM96 448l16 0 288 0 16 0 0 16 0 32 0 16-32 0 0-16 0-16-256 0 0 16 0 16-32 0 0-16 0-32 0-16zm93-304l7.9 0 118.2 0 7.9 0 4.8 6.3 84.9 112 9.7 12.7-25.5 19.3-9.7-12.7L320 193l0 111 0 96 0 16-32 0 0-16 0-80-64 0 0 80 0 16-32 0 0-16 0-96 0-111-67.2 88.7-9.7 12.7L89.6 275.1l9.7-12.7 84.9-112L189 144zm35 32l0 112 64 0 0-112-64 0z" />
    </Icon>
);

export default Transporter;