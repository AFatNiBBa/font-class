
import { Icon } from "../../index";

/**
 * A component that renders the `shield-cat` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-cat?s=sharp-light shield-cat}
 * @preview ![shield-cat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/shield-cat.svg)
 */
const ShieldCat: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48.5 114.9L256 34.3l207.5 80.5c2.7 45.6-4.5 116.8-34.7 186.3S345.4 438.4 256 477.1C166.6 438.4 113.4 370.7 83.2 301.2S45.8 160.5 48.5 114.9zm447-1.9l-1.2-20.5L475.1 85 267.6 4.5 256 0 244.4 4.5 36.9 85 17.8 92.5 16.6 113c-2.9 49.9 4.9 126.3 37.3 200.9c32.7 75.3 91 150 189.4 192.6L256 512l12.7-5.5c98.4-42.6 156.7-117.3 189.4-192.6c32.4-74.7 40.2-151 37.3-200.9zM216 288a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm96-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM144 144l0 128c0 61.9 50.1 112 112 112s112-50.1 112-112l0-128 0-16-22.6 0-4.7 4.7L281.4 192l-50.7 0-59.3-59.3-4.7-4.7L144 128l0 16zm32 38.6l36.7 36.7 4.7 4.7 6.6 0 64 0 6.6 0 4.7-4.7L336 182.6l0 89.4c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-89.4z" />
    </Icon>
);

export default ShieldCat;