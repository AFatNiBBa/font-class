
import { Icon } from "../../index";

/**
 * A component that renders the `transporter-empty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-empty?s=light transporter-empty}
 * @preview ![transporter-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/transporter-empty.svg)
 */
const TransporterEmpty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 480c-8.8 0-16 7.2-16 16s-7.2 16-16 16s-16-7.2-16-16c0-26.5 21.5-48 48-48l224 0c26.5 0 48 21.5 48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16s-7.2-16-16-16l-224 0z" />
    </Icon>
);

export default TransporterEmpty;