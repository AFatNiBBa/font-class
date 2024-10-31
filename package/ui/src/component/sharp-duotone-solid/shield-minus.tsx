
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-minus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-minus?s=sharp-duotone-solid shield-minus}
 * @preview ![shield-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shield-minus.svg)
 */
const ShieldMinus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 133.1c0 49.1 9.5 115.6 37.9 180.9c32.7 75.2 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-.4 6.3-.6 13-.6 20.1zM160 232c8 0 16 0 24 0c48 0 96 0 144 0c8 0 16 0 24 0c0 16 0 32 0 48c-8 0-16 0-24 0c-48 0-96 0-144 0c-8 0-16 0-24 0c0-16 0-32 0-48z" />
        <path d="M160 232l24 0 144 0 24 0 0 48-24 0-144 0-24 0 0-48z" />
    </Icon>
);

export default ShieldMinus;