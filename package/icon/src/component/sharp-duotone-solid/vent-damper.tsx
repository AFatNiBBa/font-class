
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vent-damper` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vent-damper?s=sharp-duotone-solid vent-damper}
 * @preview ![vent-damper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/vent-damper.svg)
 */
const VentDamper: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160l64 0 0 192L0 352 0 160zm576 0l64 0 0 192-64 0 0-192z" />
        <path d="M576 64L64 64l0 384 512 0 0-384zM184 144l272 0 24 0 0 48-24 0-272 0-24 0 0-48 24 0zm0 88l272 0 24 0 0 48-24 0-272 0-24 0 0-48 24 0zm0 88l272 0 24 0 0 48-24 0-272 0-24 0 0-48 24 0z" />
    </Icon>
);

export default VentDamper;