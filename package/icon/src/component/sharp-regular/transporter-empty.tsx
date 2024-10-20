
import { Icon } from "../../index";

/**
 * A component that renders the `transporter-empty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-empty?s=sharp-regular transporter-empty}
 * @preview ![transporter-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/transporter-empty.svg)
 */
const TransporterEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 464l24 0 272 0 24 0 0 48-24 0-272 0-24 0 0-48z" />
    </Icon>
);

export default TransporterEmpty;