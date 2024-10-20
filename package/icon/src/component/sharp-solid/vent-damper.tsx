
import { Icon } from "../../index";

/**
 * A component that renders the `vent-damper` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vent-damper?s=sharp-solid vent-damper}
 * @preview ![vent-damper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/vent-damper.svg)
 */
const VentDamper: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 64l512 0 0 96 64 0 0 192-64 0 0 96L64 448l0-96L0 352 0 160l64 0 0-96zm120 80l-24 0 0 48 24 0 272 0 24 0 0-48-24 0-272 0zm0 88l-24 0 0 48 24 0 272 0 24 0 0-48-24 0-272 0zm0 88l-24 0 0 48 24 0 272 0 24 0 0-48-24 0-272 0z" />
    </Icon>
);

export default VentDamper;