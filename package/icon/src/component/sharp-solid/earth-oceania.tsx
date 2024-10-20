
import { Icon } from "../../index";

/**
 * A component that renders the `earth-oceania` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/earth-oceania?s=sharp-solid earth-oceania}
 * @preview ![earth-oceania](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/earth-oceania.svg)
 */
const EarthOceania: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM411.3 379.3l-32 32L368 422.6 345.4 400l11.3-11.3 32-32L400 345.4 422.6 368l-11.3 11.3zM288 416l0 32-64 0 0-32 64 0zM448 256l0 64-32 0 0-64 32 0zM192 160l0-32 96 0 0 64-64 0-32-32zM96 352l0-64 64-64 32 0 0 32 32 0 0-32 32 0 64 64 0 96-96 0-32-32-96 0z" />
    </Icon>
);

export default EarthOceania;