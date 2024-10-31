
import { Icon, generic } from "../../index";

/**
 * A component that renders the `garage-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/garage-open?s=sharp-duotone-solid garage-open}
 * @preview ![garage-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/garage-open.svg)
 */
const GarageOpen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 363.5l0 4.5 0 24 0 24 0 64 0 32 64 0 0-32 0-16 192 0 0 16 0 32 64 0 0-32 0-64 0-24 0-25.8 0-4.5-1.7-4.2L463.7 320l-51.5 0 6.3 16L222 336l6.2-16-51.4 0-15.1 39.4-1.6 4.2zM264 400a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm160 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M0 512L0 128 320 0 640 128l0 384-96 0 0-320L96 192l0 320L0 512zM512 288l-384 0 0-64 384 0 0 64z" />
    </Icon>
);

export default GarageOpen;