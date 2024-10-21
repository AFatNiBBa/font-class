
import { Icon } from "../../index";

/**
 * A component that renders the `transporter-empty` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-empty?s=sharp-thin transporter-empty}
 * @preview ![transporter-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/transporter-empty.svg)
 */
const TransporterEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 448l8 0 304 0 8 0 0 8 0 48 0 8-16 0 0-8 0-40-288 0 0 40 0 8-16 0 0-8 0-48 0-8z" />
    </Icon>
);

export default TransporterEmpty;