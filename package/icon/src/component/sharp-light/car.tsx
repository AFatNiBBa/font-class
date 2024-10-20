
import { Icon } from "../../index";

/**
 * A component that renders the `car` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car?s=sharp-light car}
 * @preview ![car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/car.svg)
 */
const Car: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 32l-11.9 0L96.7 43.4 52.1 192 32 192 0 192l0 32L0 384l0 16 0 16 0 64 32 0 0-64 448 0 0 64 32 0 0-64 0-16 0-16 0-160 0-32-32 0-20.1 0L415.3 43.4 411.9 32 400 32 112 32zM426.5 192l-341 0L123.9 64l264.2 0 38.4 128zM480 224l0 160L32 384l0-160 448 0zM104 320a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm328-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Car;