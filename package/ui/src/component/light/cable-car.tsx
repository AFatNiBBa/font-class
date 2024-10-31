
import { Icon } from "../../index";

/**
 * A component that renders the `cable-car` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cable-car?s=light cable-car}
 * @preview ![cable-car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/cable-car.svg)
 */
const CableCar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-72 8a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM320 256l0 96-128 0 0-96 48 0 32 0 48 0zm32 0l64 0c17.7 0 32 14.3 32 32l0 64-96 0 0-96zm96 128l0 64c0 17.7-14.3 32-32 32L96 480c-17.7 0-32-14.3-32-32l0-64 112 0 160 0 112 0zM64 352l0-64c0-17.7 14.3-32 32-32l64 0 0 96-96 0zM416 224l-144 0 0-82.9L499.1 95.7c8.7-1.7 14.3-10.2 12.6-18.8s-10.2-14.3-18.8-12.6l-240 48-240 48C4.2 162-1.4 170.5 .3 179.1s10.2 14.3 18.8 12.6L240 147.5l0 76.5L96 224c-35.3 0-64 28.7-64 64l0 160c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-160c0-35.3-28.7-64-64-64z" />
    </Icon>
);

export default CableCar;