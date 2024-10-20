
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-plus?s=sharp-duotone-solid shield-plus}
 * @preview ![shield-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shield-plus.svg)
 */
const ShieldPlus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 133.1c0 49.1 9.5 115.6 37.9 180.9c32.7 75.2 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-.4 6.3-.6 13-.6 20.1zM144 232c8 0 16 0 24 0c21.3 0 42.7 0 64 0c0-21.3 0-42.7 0-64c0-8 0-16 0-24c16 0 32 0 48 0c0 8 0 16 0 24c0 21.3 0 42.7 0 64c21.3 0 42.7 0 64 0c8 0 16 0 24 0c0 16 0 32 0 48c-8 0-16 0-24 0c-21.3 0-42.7 0-64 0c0 21.3 0 42.7 0 64c0 8 0 16 0 24l-48 0c0-8 0-16 0-24c0-21.3 0-42.7 0-64c-21.3 0-42.7 0-64 0c-8 0-16 0-24 0c0-16 0-32 0-48z" />
        <path d="M232 344l0 24 48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24-48 0 0 24 0 64-64 0-24 0 0 48 24 0 64 0 0 64z" />
    </Icon>
);

export default ShieldPlus;