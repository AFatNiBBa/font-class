
import { Icon, generic } from "../../index";

/**
 * A component that renders the `compass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass?s=duotone compass}
 * @preview ![compass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/compass.svg)
 */
const Compass: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM129.7 358.3c0-2.8 .5-5.8 1.7-8.7c18.5-48.1 37-96.2 55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4c48.1-18.5 96.2-37 144.3-55.5c19.4-7.5 38.5 11.6 31 31c-18.5 48.1-37 96.2-55.5 144.3c-3.3 8.5-9.9 15.1-18.4 18.4c-48.1 18.5-96.2 37-144.3 55.5c-16.5 6.3-32.7-6.4-32.7-22.3z" />
        <path d="M162.4 380.6l144.3-55.5c8.5-3.3 15.1-9.9 18.4-18.4l55.5-144.3c7.5-19.4-11.6-38.5-31-31L205.3 186.9c-8.5 3.3-15.1 9.9-18.4 18.4L131.4 349.6c-7.5 19.4 11.6 38.5 31 31zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Compass;