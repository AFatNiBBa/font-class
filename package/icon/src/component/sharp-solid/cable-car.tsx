
import { Icon } from "../../index";

/**
 * A component that renders the `cable-car` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cable-car?s=sharp-solid cable-car}
 * @preview ![cable-car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cable-car.svg)
 */
const CableCar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-64-8a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm261 47.5l23.5-5L498.4 51.5l-23.5 5-224 48-224 48-23.5 5 10.1 46.9 23.5-5 195-41.8 0 66.3L32 224l0 288 448 0 0-288-200 0 0-76.6 205-43.9zM80 288l96 0 0 96-96 0 0-96zm224 0l0 96-96 0 0-96 96 0zm32 0l96 0 0 96-96 0 0-96z" />
    </Icon>
);

export default CableCar;