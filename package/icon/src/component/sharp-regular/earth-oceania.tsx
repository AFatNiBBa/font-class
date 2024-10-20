
import { Icon } from "../../index";

/**
 * A component that renders the `earth-oceania` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/earth-oceania?s=sharp-regular earth-oceania}
 * @preview ![earth-oceania](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/earth-oceania.svg)
 */
const EarthOceania: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM387.3 379.3l-24 24L352 414.6 329.4 392l11.3-11.3 24-24L376 345.4 398.6 368l-11.3 11.3zM288 400l0 32-64 0 0-32 64 0zM416 256l0 64-32 0 0-64 32 0zM192 160l0-32 96 0 0 64-64 0-32-32zM96 336l0-48 64-64 32 0 0 32 32 0 0-32 32 0 64 64 0 80-96 0-32-32-96 0z" />
    </Icon>
);

export default EarthOceania;