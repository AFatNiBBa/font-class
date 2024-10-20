
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-waveform` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-waveform?s=duotone magnifying-glass-waveform}
 * @preview ![magnifying-glass-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/magnifying-glass-waveform.svg)
 */
const MagnifyingGlassWaveform: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm96-56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112zm88-32c0-13.3 10.7-24 24-24s24 10.7 24 24l0 176c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-176zm88 64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48z" />
        <path d="M232 120l0 176c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-176c0-13.3 10.7-24 24-24s24 10.7 24 24zm-88 32l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24s24 10.7 24 24zm176 32l0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24s24 10.7 24 24zM457.4 502.6L330.7 376C348 363.3 363.3 348 376 330.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z" />
    </Icon>
);

export default MagnifyingGlassWaveform;