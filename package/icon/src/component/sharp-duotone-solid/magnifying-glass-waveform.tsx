
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-waveform` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-waveform?s=sharp-duotone-solid magnifying-glass-waveform}
 * @preview ![magnifying-glass-waveform](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/magnifying-glass-waveform.svg)
 */
const MagnifyingGlassWaveform: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm96-80l48 0 0 24 0 112 0 24-48 0 0-24 0-112 0-24zm88-32l48 0 0 24 0 176 0 24-48 0 0-24 0-176 0-24zm88 64l48 0 0 24 0 48 0 24-48 0 0-24 0-48 0-24z" />
        <path d="M232 120l0 176 0 24-48 0 0-24 0-176 0-24 48 0 0 24zm-88 32l0 112 0 24-48 0 0-24 0-112 0-24 48 0 0 24zm176 32l0 48 0 24-48 0 0-24 0-48 0-24 48 0 0 24zM441.4 486.6L330.7 376C348 363.3 363.3 348 376 330.7L486.6 441.4 509.3 464 464 509.3l-22.6-22.6z" />
    </Icon>
);

export default MagnifyingGlassWaveform;