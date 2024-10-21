
import { Icon, generic } from "../../index";

/**
 * A component that renders the `peso-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peso-sign?s=duotone peso-sign}
 * @preview ![peso-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/peso-sign.svg)
 */
const PesoSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 160c0-17.7 14.3-32 32-32l0 64c-17.7 0-32-14.3-32-32zm0 96c0-17.7 14.3-32 32-32l0 64c-17.7 0-32-14.3-32-32zM96 128l158.4 0c17.1 16.8 28.9 39.1 32.5 64L96 192l0-64zm0 96l190.9 0c-3.6 24.9-15.3 47.2-32.5 64L96 288l0-64zm236.8-96l19.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-.7 0c-2.1-22.9-8.5-44.5-18.5-64zm0 160c10-19.5 16.4-41.1 18.5-64l.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-19.2 0z" />
        <path d="M32 64c0-17.7 14.3-32 32-32l112 0c97.2 0 176 78.8 176 176s-78.8 176-176 176l-80 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96L32 64zM96 320l80 0c61.9 0 112-50.1 112-112s-50.1-112-112-112L96 96l0 224z" />
    </Icon>
);

export default PesoSign;