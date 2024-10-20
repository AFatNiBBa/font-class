
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-degree` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-degree?s=light droplet-degree}
 * @preview ![droplet-degree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/droplet-degree.svg)
 */
const DropletDegree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 480c-88.4 0-160-71.6-160-160c0-16.2 6.1-39.2 18.3-67.5c11.9-27.6 28.5-57.5 46.6-86.8c35.9-58 76.4-110.9 94.5-133.7l1.3 0c18.1 22.9 58.6 75.7 94.5 133.7c18.1 29.2 34.6 59.1 46.6 86.8C345.9 280.8 352 303.8 352 320c0 88.4-71.6 160-160 160zM0 320C0 426 86 512 192 512s192-86 192-192c0-91.2-130.2-262.3-166.6-308.3C211.4 4.2 202.5 0 192.9 0l-1.8 0c-9.6 0-18.5 4.2-24.5 11.7C130.2 57.7 0 228.8 0 320zM384 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default DropletDegree;