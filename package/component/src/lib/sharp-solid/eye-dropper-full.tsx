
import { Icon } from "../../index";

/**
 * A component that renders the `eye-dropper-full` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-dropper-full?s=sharp-solid eye-dropper-full}
 * @preview ![eye-dropper-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/eye-dropper-full.svg)
 */
const EyeDropperFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M341.6 29.2L240.1 130.8l-9.4-9.4L208 98.7 162.7 144l22.6 22.6 160 160L368 349.3 413.3 304l-22.6-22.6-9.4-9.4L482.8 170.4c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM32 344l0 88L0 472l40 40 40-32 88 0L310.7 337.3l-136-136L32 344z" />
    </Icon>
);

export default EyeDropperFull;