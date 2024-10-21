
import { Icon } from "../../index";

/**
 * A component that renders the `car-bolt` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-bolt?s=sharp-light car-bolt}
 * @preview ![car-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/car-bolt.svg)
 */
const CarBolt: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 32l-11.9 0L96.7 43.4 52.1 192 32 192 0 192l0 32L0 384l0 16 0 16 0 64 32 0 0-64 448 0 0 64 32 0 0-64 0-16 0-16 0-160 0-32-32 0-20.1 0L415.3 43.4 411.9 32 400 32 112 32zM384 192l0 32 96 0 0 160L32 384l0-160 96 0 0-32-42.5 0L123.9 64l264.2 0 38.4 128L384 192zM104 320a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm328-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM299.3 139.3L310.6 128 288 105.4l-11.3 11.3-80 80L169.4 224l38.6 0 59.1 0-54.3 52.5-11.5 11.1 22.3 23 11.5-11.1 82.7-80L346.2 192l-39.5 0-60 0 52.7-52.7z" />
    </Icon>
);

export default CarBolt;