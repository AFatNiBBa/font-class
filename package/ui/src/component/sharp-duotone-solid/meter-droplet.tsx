
import { Icon, generic } from "../../index";

/**
 * A component that renders the `meter-droplet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-droplet?s=sharp-duotone-solid meter-droplet}
 * @preview ![meter-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/meter-droplet.svg)
 */
const MeterDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c53.7 0 103.5-16.5 144.6-44.7C390 447.2 384 424.3 384 400l0-2.1c0-28.3 8.2-56 23.7-79.7L499.6 177C466.3 74.3 369.8 0 256 0C114.6 0 0 114.6 0 256zM128 128l64 0 0 32 0 32 0 32-64 0 0-32 0-32 0-32zm96 0l64 0 0 32 0 32 0 32-64 0 0-32 0-32 0-32zm96 0l64 0 0 32 0 32 0 32-64 0 0-32 0-32 0-32z" />
        <path d="M434.5 335.6L528 192l93.5 143.6c12.1 18.5 18.5 40.2 18.5 62.3V400c0 61.9-50.1 112-112 112s-112-50.1-112-112v-2.1c0-22.1 6.4-43.7 18.5-62.3z" />
    </Icon>
);

export default MeterDroplet;