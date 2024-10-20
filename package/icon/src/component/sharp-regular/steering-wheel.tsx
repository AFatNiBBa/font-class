
import { Icon } from "../../index";

/**
 * A component that renders the `steering-wheel` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/steering-wheel?s=sharp-regular steering-wheel}
 * @preview ![steering-wheel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/steering-wheel.svg)
 */
const SteeringWheel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M232 369.1l0 93.5C133.7 451.3 56.2 371.4 48.6 272l107.8 0L232 369.1zm48 0L355.6 272l107.8 0c-7.6 99.4-85 179.3-183.4 190.6l0-93.5zM352 224l-16-32-160 0-16 32L50.4 224C65.8 124.3 152 48 256 48s190.2 76.3 205.6 176L352 224zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default SteeringWheel;