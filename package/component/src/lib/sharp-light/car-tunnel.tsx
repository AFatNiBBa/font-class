
import { Icon } from "../../index";

/**
 * A component that renders the `car-tunnel` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-tunnel?s=sharp-light car-tunnel}
 * @preview ![car-tunnel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/car-tunnel.svg)
 */
const CarTunnel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32C132.3 32 32 132.3 32 256l0 240 0 16L0 512l0-16L0 256C0 114.6 114.6 0 256 0S512 114.6 512 256l0 240 0 16-32 0 0-16 0-240C480 132.3 379.7 32 256 32zM175.1 224l161.8 0 11.6 0 3.6 11.1L379.6 320l20.4 0 16 0 0 16 0 160 0 16-32 0 0-16 0-16-256 0 0 16 0 16-32 0 0-16 0-160 0-16 16 0 20.4 0 27.5-84.9 3.6-11.1 11.6 0zM384 448l0-96-256 0 0 96 256 0zM346 320l-20.7-64-138.5 0L166 320l180 0zM160 400a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm168-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default CarTunnel;