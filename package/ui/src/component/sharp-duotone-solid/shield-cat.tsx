
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-cat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-cat?s=sharp-duotone-solid shield-cat}
 * @preview ![shield-cat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shield-cat.svg)
 */
const ShieldCat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 133.1c0 49.1 9.5 115.6 37.9 180.9c32.7 75.2 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-.4 6.3-.6 13-.6 20.1zM160 144l64 64c21.3 0 42.7 0 64 0c21.3-21.3 42.7-42.7 64-64c0 42.7 0 85.3 0 128.3c0 1.6-.1 3.3-.1 4.9c-.1 1.5-.2 3.1-.4 4.7c-.3 3.2-.8 6.4-1.5 9.5c-1.3 6.2-3.2 12.3-5.6 18c-4.9 11.5-11.9 21.8-20.6 30.5C306.5 357.3 282.5 368 256 368c-53 0-96-43-96-96c0-42.7 0-85.3 0-128z" />
        <path d="M160 144l64 64 64 0 64-64 0 128c0 53-43 96-96 96s-96-43-96-96l0-128zm72 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm64 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default ShieldCat;