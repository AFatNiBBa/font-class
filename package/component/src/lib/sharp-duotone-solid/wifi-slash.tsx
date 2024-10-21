
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wifi-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-slash?s=sharp-duotone-solid wifi-slash}
 * @preview ![wifi-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wifi-slash.svg)
 */
const WifiSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M9.8 156.7C20 147 30.7 137.7 41.7 128.9l51.9 40.9C79.7 179.9 66.6 191 54.2 202.9L9.8 156.7zm117-81C185.3 47.7 250.8 32 320 32c120.4 0 229.7 47.5 310.2 124.7l-44.3 46.2C516.8 136.7 423.2 96 320 96c-47.7 0-93.3 8.7-135.4 24.5c-19.3-15-38.5-29.9-57.8-44.9zM129.5 264c13.4-11.9 28-22.5 43.5-31.7L228 275.7c-20.6 9.3-39.5 21.6-56.2 36.3l-42.4-48zM256 416c0-35.3 28.7-64 64-64c1.7 0 3.5 .1 5.2 .2L380.8 396c2.1 6.3 3.2 13 3.2 20c0 35.3-28.7 64-64 64s-64-28.7-64-64zm24.2-221.3c13-1.8 26.3-2.7 39.8-2.7c73 0 139.8 27.2 190.5 72l-42.4 48c-28.8-25.4-64.2-43.6-103.3-51.5c-28.2-21.9-56.5-43.8-84.7-65.7z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default WifiSlash;