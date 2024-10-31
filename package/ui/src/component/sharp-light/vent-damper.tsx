
import { Icon } from "../../index";

/**
 * A component that renders the `vent-damper` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vent-damper?s=sharp-light vent-damper}
 * @preview ![vent-damper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/vent-damper.svg)
 */
const VentDamper: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 96l0 48 0 224 0 48L96 416l0-48 0-224 0-48 448 0zM64 96l0 32-48 0L0 128l0 16L0 368l0 16 16 0 48 0 0 32 0 32 32 0 448 0 32 0 0-32 0-32 48 0 16 0 0-16 0-224 0-16-16 0-48 0 0-32 0-32-32 0L96 64 64 64l0 32zM32 352l0-192 32 0 0 192-32 0zm576 0l-32 0 0-192 32 0 0 192zM176 160l-16 0 0 32 16 0 288 0 16 0 0-32-16 0-288 0zm0 80l-16 0 0 32 16 0 288 0 16 0 0-32-16 0-288 0zm0 80l-16 0 0 32 16 0 288 0 16 0 0-32-16 0-288 0z" />
    </Icon>
);

export default VentDamper;