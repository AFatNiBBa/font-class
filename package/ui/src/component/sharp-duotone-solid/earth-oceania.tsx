
import { Icon, generic } from "../../index";

/**
 * A component that renders the `earth-oceania` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/earth-oceania?s=sharp-duotone-solid earth-oceania}
 * @preview ![earth-oceania](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/earth-oceania.svg)
 */
const EarthOceania: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96 32l64-64 32 0 0 32 32 0 0-32 32 0 64 64 0 96-96 0-32-32-96 0 0-64zm96-160l96 0 0 64-64 0-32-32 0-32zm32 288l64 0 0 32-64 0 0-32zm121.4-16l11.3-11.3 32-32L400 345.4 422.6 368l-11.3 11.3-32 32L368 422.6 345.4 400zM416 256l32 0 0 64-32 0 0-64z" />
        <path d="M192 160l32 32 64 0 0-64-96 0 0 32zm256 96l-32 0 0 64 32 0 0-64zM422.6 368L400 345.4l-11.3 11.3-32 32L345.4 400 368 422.6l11.3-11.3 32-32L422.6 368zM224 448l64 0 0-32-64 0 0 32zM96 352l96 0 32 32 96 0 0-96-64-64-32 0 0 32-32 0 0-32-32 0L96 288l0 64z" />
    </Icon>
);

export default EarthOceania;