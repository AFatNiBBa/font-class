
import { Icon } from "../../index";

/**
 * A component that renders the `flux-capacitor` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flux-capacitor?s=light flux-capacitor}
 * @preview ![flux-capacitor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/flux-capacitor.svg)
 */
const FluxCapacitor: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM292.7 255.2c3.7 .5 7.5 .8 11.3 .8c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80c3.8 0 7.6-.3 11.3-.8l-45.3-45.3c-18.7-18.7-18.7-49.1 0-67.9s49.1-18.7 67.9 0L224 188.1l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0s18.7 49.1 0 67.9l-45.3 45.3zM173.8 273.7C155.6 288.4 144 310.8 144 336c0 44.2 35.8 80 80 80s80-35.8 80-80c0-25.2-11.6-47.6-29.8-62.3l-2.2 2.2 0 60.1c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-60.1-2.2-2.2zm-18.5-109c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L208 262.6l0 73.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-73.4 75.3-75.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 233.4l-68.7-68.7z" />
    </Icon>
);

export default FluxCapacitor;