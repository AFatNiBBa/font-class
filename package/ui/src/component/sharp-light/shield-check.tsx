
import { Icon } from "../../index";

/**
 * A component that renders the `shield-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-check?s=sharp-light shield-check}
 * @preview ![shield-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/shield-check.svg)
 */
const ShieldCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48.5 114.9L256 34.3l207.5 80.5c2.7 45.6-4.5 116.8-34.7 186.3S345.4 438.4 256 477.1C166.6 438.4 113.4 370.7 83.2 301.2S45.8 160.5 48.5 114.9zm447-1.9l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-2.9 49.9 4.9 126.3 37.3 200.9c32.7 75.3 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9zM363.3 203.3L374.6 192 352 169.4l-11.3 11.3L224 297.4l-52.7-52.7L160 233.4 137.4 256l11.3 11.3 64 64L224 342.6l11.3-11.3 128-128z" />
    </Icon>
);

export default ShieldCheck;