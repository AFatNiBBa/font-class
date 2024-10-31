
import { Icon, generic } from "../../index";

/**
 * A component that renders the `prescription` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription?s=sharp-duotone-solid prescription}
 * @preview ![prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/prescription.svg)
 */
const Prescription: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M130.7 464L176 509.3l22.6-22.6c29.8-29.8 59.6-59.6 89.4-89.4c15.1-15.1 30.2-30.2 45.3-45.3c29.8-29.8 59.6-59.6 89.4-89.4L445.3 240 400 194.7l-22.6 22.6c-29.8 29.8-59.6 59.6-89.4 89.4c-15.1 15.1-30.2 30.2-45.3 45.3l-89.4 89.4L130.7 464z" />
        <path d="M0 0L32 0 176 0c61.9 0 112 50.1 112 112c0 52.8-36.6 97.1-85.8 108.9L288 306.7 242.7 352l-128-128L64 224l0 64 0 32L0 320l0-32 0-96L0 32 0 0zM288 397.3L333.3 352l89.4 89.4L445.3 464 400 509.3l-22.6-22.6L288 397.3zM64 160l112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L64 64l0 96z" />
    </Icon>
);

export default Prescription;