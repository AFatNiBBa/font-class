
import { Icon, generic } from "../../index";

/**
 * A component that renders the `land-mine-on` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/land-mine-on?s=duotone land-mine-on}
 * @preview ![land-mine-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/land-mine-on.svg)
 */
const LandMineOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M83.7 480c0 16.8 13.5 32 32 32l408.4 0c23.8 0 39.3-25 28.6-46.3l-27.6-55.2c-8.1-16.3-24.7-26.5-42.9-26.5l-324.7 0c-18.2 0-34.8 10.3-42.9 26.5L87.2 465.7c-2.3 4.7-3.4 9.6-3.4 14.3zM192 320l0 32 256 0 0-32c0-17.7-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32z" />
        <path d="M320 0c13.3 0 24 10.7 24 24l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24zM36.3 138.3c7.5-10.9 22.5-13.6 33.4-6.1l104 72c10.9 7.5 13.6 22.5 6.1 33.4s-22.5 13.6-33.4 6.1l-104-72c-10.9-7.5-13.6-22.5-6.1-33.4zm534.1-6.1c10.9-7.5 25.8-4.8 33.4 6.1s4.8 25.8-6.1 33.4l-104 72c-10.9 7.5-25.8 4.8-33.4-6.1s-4.8-25.8 6.1-33.4l104-72z" />
    </Icon>
);

export default LandMineOn;