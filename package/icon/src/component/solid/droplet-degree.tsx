
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-degree` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-degree?s=solid droplet-degree}
 * @preview ![droplet-degree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/droplet-degree.svg)
 */
const DropletDegree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM464 112a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-112 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z" />
    </Icon>
);

export default DropletDegree;