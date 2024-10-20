
import { Icon } from "../../index";

/**
 * A component that renders the `eye-dropper` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-dropper?s=sharp-solid eye-dropper}
 * @preview ![eye-dropper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/eye-dropper.svg)
 */
const EyeDropper: typeof Icon = x => (
    <Icon {...x}>
        <path d="M341.6 29.2L240.1 130.8l-9.4-9.4L208 98.7 162.7 144l22.6 22.6 160 160L368 349.3 413.3 304l-22.6-22.6-9.4-9.4L482.8 170.4c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM32 344l0 88-9.9 12.3L4 467l-4 5 40 40 5-4 22.7-18.1L80 480l88 0L310.7 337.3 265.5 292l-124 124L96 416l0-45.5 124-124-45.3-45.3L32 344z" />
    </Icon>
);

export default EyeDropper;