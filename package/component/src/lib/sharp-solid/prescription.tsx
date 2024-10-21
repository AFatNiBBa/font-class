
import { Icon } from "../../index";

/**
 * A component that renders the `prescription` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription?s=sharp-solid prescription}
 * @preview ![prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/prescription.svg)
 */
const Prescription: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 0L0 0 0 32 0 192l0 96 0 32 64 0 0-32 0-64 50.7 0 128 128-89.4 89.4L130.7 464 176 509.3l22.6-22.6L288 397.3l89.4 89.4L400 509.3 445.3 464l-22.6-22.6L333.3 352l89.4-89.4L445.3 240 400 194.7l-22.6 22.6L288 306.7l-85.8-85.8C251.4 209.1 288 164.8 288 112C288 50.1 237.9 0 176 0L32 0zM176 160L64 160l0-96 112 0c26.5 0 48 21.5 48 48s-21.5 48-48 48z" />
    </Icon>
);

export default Prescription;