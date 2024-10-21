
import { Icon } from "../../index";

/**
 * A component that renders the `transporter-empty` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-empty?s=solid transporter-empty}
 * @preview ![transporter-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/transporter-empty.svg)
 */
const TransporterEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M296 512l88 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l88 0 80 0z" />
    </Icon>
);

export default TransporterEmpty;