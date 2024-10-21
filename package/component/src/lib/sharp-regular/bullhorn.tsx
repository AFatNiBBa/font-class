
import { Icon } from "../../index";

/**
 * A component that renders the `bullhorn` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullhorn?s=sharp-regular bullhorn}
 * @preview ![bullhorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bullhorn.svg)
 */
const Bullhorn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M438.1 0L448 0l8 0 24 0 0 24 0 155.6c18.6 8.8 32 32.5 32 60.4s-13.4 51.6-32 60.4L480 456l0 24-24 0-8 0-9.9 0-7-7-43.6-43.6c-47.8-47.8-112-75.4-179.4-77.2L208 464l0 48-48 0-48 0-48 0 0-48 0-112-16 0L0 352l0-48L0 176l0-48 48 0 112 0 40.7 0c70 0 137.2-27.8 186.7-77.3L431 7l7-7zM421.3 395.4L432 406.1l0-332.1L421.3 84.6C364.5 141.4 288.1 174 208 175.9c0 0 0 .1 0 .1l0 128s0 0 0 0c0 0 0 .1 0 .1c80.1 1.9 156.5 34.5 213.3 91.3zM48 176l0 128 16 0s0 0 0 0l48 0 48 0 0-128L48 176zm64 176l0 112 48 0 0-112-48 0z" />
    </Icon>
);

export default Bullhorn;