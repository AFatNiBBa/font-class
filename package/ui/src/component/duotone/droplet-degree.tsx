
import { Icon, generic } from "../../index";

/**
 * A component that renders the `droplet-degree` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-degree?s=duotone droplet-degree}
 * @preview ![droplet-degree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/droplet-degree.svg)
 */
const DropletDegree: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M352 112a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm112 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M0 320C0 426 86 512 192 512s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3C211.4 4.2 202.5 0 192.9 0h-1.8c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320z" />
    </Icon>
);

export default DropletDegree;