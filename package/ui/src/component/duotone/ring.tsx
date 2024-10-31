
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ring` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ring?s=duotone ring}
 * @preview ![ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ring.svg)
 */
const Ring: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 206.5c0 .5 0 1 0 1.5c0 .6 0 1.2 0 1.7c.9 11.3 10.6 28 39.3 44.3c40-18.6 93.7-30 152.6-30s112.6 11.4 152.6 30c28.8-16.3 38.4-33 39.3-44.3c0-.6 0-1.2 0-1.7c0-.5 0-1 0-1.5c-.9-12.3-12.2-31.2-47.9-49.1c-31-15.5-74.3-26.5-123.8-29c-6.7-.3-13.4-.4-20.3-.4s-13.6 .1-20.3 .4c-49.5 2.4-92.8 13.5-123.8 29c-35.6 17.8-47 36.7-47.9 49.1z" />
        <path d="M111.9 157.4C147.1 139.8 198 128 256 128s108.9 11.8 144.1 29.4C437.2 176 448 195.7 448 208s-10.8 32-47.9 50.6C364.9 276.2 314 288 256 288s-108.9-11.8-144.1-29.4C74.8 240 64 220.3 64 208s10.8-32 47.9-50.6zM83.3 100.2C39.4 122.2 0 158.4 0 208l0 96c0 49.6 39.4 85.8 83.3 107.8C129.1 434.7 190.3 448 256 448s126.9-13.3 172.7-36.2c43.9-22 83.3-58.2 83.3-107.8l0-96c0-49.6-39.4-85.8-83.3-107.8C382.9 77.3 321.7 64 256 64s-126.9 13.3-172.7 36.2z" />
    </Icon>
);

export default Ring;