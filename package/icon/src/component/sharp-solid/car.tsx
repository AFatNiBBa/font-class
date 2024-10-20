
import { Icon } from "../../index";

/**
 * A component that renders the `car` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car?s=sharp-solid car}
 * @preview ![car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/car.svg)
 */
const Car: typeof Icon = x => (
    <Icon {...x}>
        <path d="M120 32L97.3 32 89.8 53.4 41.3 192 0 192 0 400l0 80 96 0 0-80 320 0 0 80 96 0 0-80 0-208-41.3 0L422.2 53.4 414.7 32 392 32 120 32zM402.9 192l-293.8 0 33.6-96 226.6 0 33.6 96zM64 288a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Car;