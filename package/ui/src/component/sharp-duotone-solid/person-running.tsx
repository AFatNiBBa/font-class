
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-running` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-running?s=sharp-duotone-solid person-running}
 * @preview ![person-running](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-running.svg)
 */
const PersonRunning: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 64 32 0 80 0 20.8 0 8.4-19 28.9-64.9c-1.9-1.2-3.8-2.4-5.7-3.6c-25.1-15.7-36.1-46.5-26.8-74.5c2.8-8.5 5.7-17 8.5-25.6L91.2 352 32 352 0 352z" />
        <path d="M224 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM114.7 96L128 96l64 0 6.2 0 5.7 2.3 80 32 11.3 4.5 5.4 10.9L339.8 224l28.2 0 32 0 0 64-32 0-48 0-19.8 0-8.8-17.7-24.3-48.6L238 299 305 340.9l20.4 12.8-6.6 23.2-16 56-16 56L280.1 512l-66.6 0 11.7-40.8 16-56 9.4-32.8-86.2-53.9c-25.1-15.7-36.1-46.5-26.8-74.5l31.3-94-27.7 0-38.6 38.6L80 221.3 34.7 176l22.6-22.6 48-48 9.4-9.4z" />
    </Icon>
);

export default PersonRunning;