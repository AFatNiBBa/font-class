
import { Icon, generic } from "../../index";

/**
 * A component that renders the `droplet-degree` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-degree?s=sharp-duotone-solid droplet-degree}
 * @preview ![droplet-degree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/droplet-degree.svg)
 */
const DropletDegree: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M352 112a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm112 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M384 320c0 106-86 192-192 192S0 426 0 320S192 0 192 0s192 214 192 320z" />
    </Icon>
);

export default DropletDegree;