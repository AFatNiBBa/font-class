
import { Icon } from "../../index";

/**
 * A component that renders the `transporter-empty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-empty?s=sharp-light transporter-empty}
 * @preview ![transporter-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/transporter-empty.svg)
 */
const TransporterEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 448l16 0 288 0 16 0 0 16 0 32 0 16-32 0 0-16 0-16-256 0 0 16 0 16-32 0 0-16 0-32 0-16z" />
    </Icon>
);

export default TransporterEmpty;