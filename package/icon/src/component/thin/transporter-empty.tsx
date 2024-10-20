
import { Icon } from "../../index";

/**
 * A component that renders the `transporter-empty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-empty?s=thin transporter-empty}
 * @preview ![transporter-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/transporter-empty.svg)
 */
const TransporterEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 464c-17.7 0-32 14.3-32 32l0 8c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-8c0-26.5 21.5-48 48-48l224 0c26.5 0 48 21.5 48 48l0 8c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-8c0-17.7-14.3-32-32-32l-224 0z" />
    </Icon>
);

export default TransporterEmpty;