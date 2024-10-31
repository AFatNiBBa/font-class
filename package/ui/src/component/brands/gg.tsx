
import { Icon } from "../../index";

/**
 * A component that renders the `gg` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gg?s=brands gg}
 * @preview ![gg](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/gg.svg)
 */
const Gg: typeof Icon = x => (
    <Icon {...x}>
        <path d="M179.2 230.4l102.4 102.4-102.4 102.4L0 256 179.2 76.8l44.8 44.8-25.6 25.6-19.2-19.2-128 128 128 128 51.5-51.5-77.1-76.5 25.6-25.6zM332.8 76.8L230.4 179.2l102.4 102.4 25.6-25.6-77.1-76.5 51.5-51.5 128 128-128 128-19.2-19.2-25.6 25.6 44.8 44.8L512 256 332.8 76.8z" />
    </Icon>
);

export default Gg;