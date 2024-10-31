
import { Icon } from "../../index";

/**
 * A component that renders the `droplet-degree` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-degree?s=sharp-regular droplet-degree}
 * @preview ![droplet-degree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/droplet-degree.svg)
 */
const DropletDegree: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 320c0-14.5-7.4-39.2-24.7-72.8c-16.5-32-39-66.6-62.3-99c-20.2-28.1-40.5-53.9-57-74.1c-16.5 20.2-36.8 46-57 74.1c-23.3 32.4-45.8 66.9-62.3 99C55.4 280.8 48 305.5 48 320c0 79.5 64.5 144 144 144s144-64.5 144-144zM0 320C0 241.2 106.1 102.8 160.5 36.9C179.3 14.1 192 0 192 0s12.7 14.1 31.5 36.9C277.9 102.8 384 241.2 384 320c0 106-86 192-192 192S0 426 0 320zM464 112a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-112 0a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z" />
    </Icon>
);

export default DropletDegree;