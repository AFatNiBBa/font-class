
import { Icon } from "../../index";

/**
 * A component that renders the `car-rear` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-rear?s=sharp-regular car-rear}
 * @preview ![car-rear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/car-rear.svg)
 */
const CarRear: typeof Icon = x => (
    <Icon {...x}>
        <path d="M102.7 32L120 32l272 0 17.3 0 5.5 16.4L457.3 176l6.7 0 48 0 0 48 0 128 0 48-32 0 0 80-48 0 0-80L80 400l0 80-48 0 0-80L0 400l0-48L0 224l0-48 48 0 6.7 0L97.2 48.4 102.7 32zm272 48L137.3 80l-32 96 301.4 0-32-96zM48 224l0 32 80 0 0 48-80 0 0 48 144 0 0-64 128 0 0 64 144 0 0-48-80 0 0-48 80 0 0-32L48 224z" />
    </Icon>
);

export default CarRear;