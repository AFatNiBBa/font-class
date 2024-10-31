
import { Icon } from "../../index";

/**
 * A component that renders the `vent-damper` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vent-damper?s=light vent-damper}
 * @preview ![vent-damper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/vent-damper.svg)
 */
const VentDamper: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 96L128 96c-17.7 0-32 14.3-32 32l0 16 0 224 0 16c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-16 0-224 0-16c0-17.7-14.3-32-32-32zM48 128l16 0c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l16 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-16 0c0 35.3-28.7 64-64 64l-384 0c-35.3 0-64-28.7-64-64l-16 0c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48zM592 352c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-16 0 0 192 16 0zM48 352l16 0 0-192-16 0c-8.8 0-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16zM176 160l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-288 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 80l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-288 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 80l288 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-288 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default VentDamper;