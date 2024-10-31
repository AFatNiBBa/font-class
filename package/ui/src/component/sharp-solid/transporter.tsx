
import { Icon } from "../../index";

/**
 * A component that renders the `transporter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter?s=sharp-solid transporter}
 * @preview ![transporter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/transporter.svg)
 */
const Transporter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm-18.4 80l15.4 0 102.2 0 15.4 0 9.6 12L409 236l20 25L379 301l-20-25-31-38.7L328 416l-64 0 0-96-16 0 0 96-64 0 0-178.7L153 276l-20 25L83 261l20-25L180 140l9.6-12zM296 512l-80 0L96 512l0-64 320 0 0 64-120 0zM480 32l32 16L480 64 464 96 448 64 416 48l32-16L464 0l16 32zM48 64L64 96l32 16L64 128 48 160 32 128 0 112 32 96 48 64z" />
    </Icon>
);

export default Transporter;