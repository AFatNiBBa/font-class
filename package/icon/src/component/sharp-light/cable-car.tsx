
import { Icon } from "../../index";

/**
 * A component that renders the `cable-car` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cable-car?s=sharp-light cable-car}
 * @preview ![cable-car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cable-car.svg)
 */
const CableCar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 48a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-72 8a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM320 256l0 96-128 0 0-96 48 0 32 0 48 0zm32 0l96 0 0 96-96 0 0-96zm96 128l0 96L64 480l0-96 112 0 160 0 112 0zM64 352l0-96 96 0 0 96-96 0zM448 224l-176 0 0-83L491.2 95.7l15.7-3.2-6.5-31.3-15.7 3.2-232 48-232 48L5.1 163.6l6.5 31.3 15.7-3.2 212.8-44 0 76.4L64 224l-32 0 0 32 0 224 0 32 32 0 384 0 32 0 0-32 0-224 0-32-32 0z" />
    </Icon>
);

export default CableCar;