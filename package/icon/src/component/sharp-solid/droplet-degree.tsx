
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-degree` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-degree?s=sharp-solid droplet-degree}
 * @preview ![droplet-degree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/droplet-degree.svg)
 */
const DropletDegree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 512c106 0 192-86 192-192S192 0 192 0S0 214 0 320S86 512 192 512zM400 112a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm112 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default DropletDegree;