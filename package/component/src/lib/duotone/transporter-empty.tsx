
import { Icon } from "../../index";

/**
 * A component that renders the `transporter-empty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-empty?s=duotone transporter-empty}
 * @preview ![transporter-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/transporter-empty.svg)
 */
const TransporterEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 480c0-17.7 14.3-32 32-32H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default TransporterEmpty;