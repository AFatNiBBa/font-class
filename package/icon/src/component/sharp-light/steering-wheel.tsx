
import { Icon } from "../../index";

/**
 * A component that renders the `steering-wheel` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/steering-wheel?s=sharp-light steering-wheel}
 * @preview ![steering-wheel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/steering-wheel.svg)
 */
const SteeringWheel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 390.6l0 88.8C134.4 472 49.1 391.4 34.3 288l103.1 0L240 390.6zm32 0L374.6 288l103.1 0C462.9 391.4 377.6 472 272 479.4l0-88.8zM377.9 256l-27.6-55.2-4.4-8.8-9.9 0-160 0-9.9 0-4.4 8.8L134.1 256 32 256C32 132.3 132.3 32 256 32s224 100.3 224 224l-102.1 0zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM163.5 268.8L185.9 224l140.2 0 22.4 44.8L256 361.4l-92.5-92.5z" />
    </Icon>
);

export default SteeringWheel;