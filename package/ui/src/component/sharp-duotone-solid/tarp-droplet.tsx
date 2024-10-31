
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tarp-droplet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp-droplet?s=sharp-duotone-solid tarp-droplet}
 * @preview ![tarp-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tarp-droplet.svg)
 */
const TarpDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128l197.5 0c13.2 37.3 48.7 64 90.5 64s77.4-26.7 90.5-64L576 128l0 224-160 0 0 160L0 512 0 128zm64 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M288 160c35.3 0 64-26.9 64-60S288-8 288-8s-64 74.9-64 108s28.7 60 64 60zM416 512L576 352l-160 0 0 160z" />
    </Icon>
);

export default TarpDroplet;