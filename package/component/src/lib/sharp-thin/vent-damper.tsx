
import { Icon } from "../../index";

/**
 * A component that renders the `vent-damper` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vent-damper?s=sharp-thin vent-damper}
 * @preview ![vent-damper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/vent-damper.svg)
 */
const VentDamper: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 80l0 56 0 240 0 56 480 0 0-56 0-240 0-56L80 80zm496 0l0 48 56 0 8 0 0 8 0 240 0 8-8 0-56 0 0 48 0 16-16 0L80 448l-16 0 0-16 0-48L8 384l-8 0 0-8L0 136l0-8 8 0 56 0 0-48 0-16 16 0 480 0 16 0 0 16zm0 288l48 0 0-224-48 0 0 224zM64 144l-48 0 0 224 48 0 0-224zm64-16l0 256 384 0 0-256-384 0zm-16-16l16 0 384 0 16 0 0 16 0 256 0 16-16 0-384 0-16 0 0-16 0-256 0-16zm72 64l272 0 8 0 0 16-8 0-272 0-8 0 0-16 8 0zm0 72l272 0 8 0 0 16-8 0-272 0-8 0 0-16 8 0zm0 72l272 0 8 0 0 16-8 0-272 0-8 0 0-16 8 0z" />
    </Icon>
);

export default VentDamper;