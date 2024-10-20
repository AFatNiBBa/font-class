
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-xmark?s=sharp-duotone-solid shield-xmark}
 * @preview ![shield-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shield-xmark.svg)
 */
const ShieldXmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 133.1c0 49.1 9.5 115.6 37.9 180.9c32.7 75.2 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-.4 6.3-.6 13-.6 20.1zM158.1 192c11.3-11.3 22.6-22.6 33.9-33.9l17 17 47 47 47-47c5.6-5.7 11.3-11.3 17-17L353.9 192c-5.7 5.7-11.3 11.3-17 17c-15.7 15.7-31.3 31.4-47 47c15.7 15.7 31.3 31.4 47 47c5.7 5.7 11.3 11.3 17 17c-11.3 11.3-22.6 22.6-33.9 33.9c-5.7-5.7-11.3-11.3-17-17c-15.7-15.7-31.4-31.3-47-47c-15.7 15.7-31.3 31.4-47 47c-5.7 5.7-11.3 11.3-17 17c-11.3-11.3-22.6-22.6-33.9-33.9c5.7-5.7 11.3-11.3 17-17l47-47c-15.7-15.7-31.4-31.4-47-47c-5.7-5.7-11.3-11.3-17-17z" />
        <path d="M337 209l17-17L320 158.1l-17 17-47 47-47-47-17-17L158.1 192l17 17 47 47-47 47-17 17L192 353.9l17-17 47-47 47 47 17 17L353.9 320l-17-17-47-47 47-47z" />
    </Icon>
);

export default ShieldXmark;