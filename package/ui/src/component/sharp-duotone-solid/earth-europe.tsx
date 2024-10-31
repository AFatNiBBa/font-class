
import { Icon, generic } from "../../index";

/**
 * A component that renders the `earth-europe` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/earth-europe?s=sharp-duotone-solid earth-europe}
 * @preview ![earth-europe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/earth-europe.svg)
 */
const EarthEurope: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c5.4 0 10.7-.2 16-.5l0-79.5-64 0-48-48 0-112c48 0 96 0 144 0c16 16 32 32 48 48c10.7 0 21.3 0 32 0c10.7 10.7 21.3 21.3 32 32l32 0 0 32-64 64 0 29.8c58.7-33.9 102.6-90.5 119.9-157.8c-24 0-48 0-71.9 0c-16-16-32-32-48-48l0-80c10.7 0 21.3 0 32 0l0-32c-21.3 0-42.7 0-64 0l0 48c-26.7 0-53.3 0-80 0c-5.3 0-10.7 0-16 0l0 32c-21.3 0-42.7 0-64 0l0-32c26.7-26.7 53.3-53.3 80-80l0-16c-16 0-32 0-48 0l0-32c25.4-25.4 50.8-50.8 76.2-76.2C285.8 1.3 271.1 0 256 0C114.6 0 0 114.6 0 256zM121.4 144c3.8-3.8 7.5-7.5 11.3-11.3c10.7-10.7 21.3-21.3 32-32c3.8-3.8 7.5-7.5 11.3-11.3c7.5 7.5 15.1 15.1 22.6 22.6c-3.8 3.8-7.5 7.5-11.3 11.3c-10.7 10.7-21.3 21.3-32 32c-3.8 3.8-7.5 7.5-11.3 11.3c-7.5-7.5-15.1-15.1-22.6-22.6z" />
        <path d="M352 160l64 0 0 32-32 0 0 80 48 48 71.9 0c5.3-20.5 8.1-41.9 8.1-64C512 129.7 420.5 24.7 300.2 3.8L224 80l0 32 48 0 0 16-80 80 0 32 64 0 0-32 16 0 80 0 0-48zm32 317.8l0-29.8 64-64 0-32-32 0-32-32-32 0-48-48-144 0 0 112 48 48 64 0 0 79.5c40.6-2.5 78.7-14.5 112-33.8zM198.6 112L176 89.4l-11.3 11.3-32 32L121.4 144 144 166.6l11.3-11.3 32-32L198.6 112z" />
    </Icon>
);

export default EarthEurope;