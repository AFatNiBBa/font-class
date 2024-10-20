
import { Icon } from "../../index";

/**
 * A component that renders the `transporter-empty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-empty?s=regular transporter-empty}
 * @preview ![transporter-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/transporter-empty.svg)
 */
const TransporterEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 488c0-13.3 10.7-24 24-24l272 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-272 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default TransporterEmpty;