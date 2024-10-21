
import { Icon } from "../../index";

/**
 * A component that renders the `tarp-droplet` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tarp-droplet?s=sharp-solid tarp-droplet}
 * @preview ![tarp-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tarp-droplet.svg)
 */
const TarpDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 160c-35.3 0-64-25.6-64-57.1S288 0 288 0s64 71.3 64 102.9s-28.7 57.1-64 57.1zM0 128l197.5 0c13.2 37.3 48.7 64 90.5 64s77.4-26.7 90.5-64L576 128l0 224-160 0 0 160L0 512 0 128zM576 384L448 512l0-128 128 0zM96 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default TarpDroplet;