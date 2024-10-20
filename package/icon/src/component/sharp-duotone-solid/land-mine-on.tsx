
import { Icon, generic } from "../../index";

/**
 * A component that renders the `land-mine-on` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/land-mine-on?s=sharp-duotone-solid land-mine-on}
 * @preview ![land-mine-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/land-mine-on.svg)
 */
const LandMineOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 512l512 0L512 384l-384 0L64 512zM192 288l0 64 256 0 0-64-256 0z" />
        <path d="M344 0l0 24 0 144 0 24-48 0 0-24 0-144 0-24 48 0zM49.9 118.6l19.7 13.7 104 72 19.7 13.7-27.3 39.5-19.7-13.7-104-72L22.6 158.1l27.3-39.5zm567.5 39.5l-19.7 13.7-104 72-19.7 13.7-27.3-39.5 19.7-13.7 104-72 19.7-13.7 27.3 39.5z" />
    </Icon>
);

export default LandMineOn;