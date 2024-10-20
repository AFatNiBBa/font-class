
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield?s=sharp-duotone-solid shield}
 * @preview ![shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shield.svg)
 */
const Shield: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M267.6 4.5L256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-2.9 49.9 4.9 126.3 37.3 200.9c32.7 75.3 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9l-1.2-20.5L475.1 85 267.6 4.5z" />
    </Icon>
);

export default Shield;