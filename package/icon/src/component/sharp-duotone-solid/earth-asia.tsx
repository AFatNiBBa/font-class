
import { Icon, generic } from "../../index";

/**
 * A component that renders the `earth-asia` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/earth-asia?s=sharp-duotone-solid earth-asia}
 * @preview ![earth-asia](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/earth-asia.svg)
 */
const EarthAsia: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2 288C17.7 414.3 125.5 512 256 512c54.3 0 104.7-16.9 146.2-45.8L352 416l-64 0 0-64 64-64 64 0 0 32 87.9 0c5.3-20.5 8.1-41.9 8.1-64C512 131 422.4 27 304 4.5L304 112l-32 32 0 80-48 0 0 96-64 0-32-32L2 288zm126 64l64 0 0 32-64 0 0-32zm128-96l32 0 0 64-32 0 0-64zm64-128l32 0 0 64-32 0 0-64z" />
        <path d="M304 4.5L304 112l-32 32 0 80-48 0 0 96-64 0-32-32L2 288c-1.3-10.5-2-21.2-2-32C0 114.6 114.6 0 256 0c16.4 0 32.5 1.5 48 4.5zM503.9 320c-15.5 60.1-52.2 111.7-101.8 146.2L352 416l-64 0 0-64 64-64 64 0 0 32 87.9 0zM192 352l0 32-64 0 0-32 64 0zM320 128l32 0 0 64-32 0 0-64zM288 256l0 64-32 0 0-64 32 0z" />
    </Icon>
);

export default EarthAsia;