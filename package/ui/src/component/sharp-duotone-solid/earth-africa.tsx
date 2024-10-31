
import { Icon, generic } from "../../index";

/**
 * A component that renders the `earth-africa` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/earth-africa?s=sharp-duotone-solid earth-africa}
 * @preview ![earth-africa](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/earth-africa.svg)
 */
const EarthAfrica: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256c0-33.2-6.3-65-17.9-94.1c-10 10-20.1 20.1-30.1 30.1c-37.3 0-74.7 0-112 0l0 32c10.7 10.7 21.3 21.3 32 32l0 64-32 0 0 48-48 48-48 0c0-32 0-64 0-96l-96 0c0-29.3 0-58.7 0-88l40-40 88 0c21.3-21.3 42.7-42.7 64-64c-32 0-64 0-96 0l-32 32c-10.7 0-21.3 0-32 0c0-32 0-64 0-96c-13.8-13.8-27.6-27.6-41.4-41.4C61.8 62.8 0 152.2 0 256z" />
        <path d="M160 232l0 88 96 0 0 96 48 0 48-48 0-48 32 0 0-64-32-32 0-32 112 0 30.1-30.1C456.6 67.1 364.1 0 256 0c-37.6 0-73.2 8.1-105.4 22.6L192 64l0 96 32 0 32-32 96 0-64 64-88 0-40 40z" />
    </Icon>
);

export default EarthAfrica;