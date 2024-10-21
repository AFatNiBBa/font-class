
import { Icon } from "../../index";

/**
 * A component that renders the `eye-dropper` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-dropper?s=sharp-light eye-dropper}
 * @preview ![eye-dropper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/eye-dropper.svg)
 */
const EyeDropper: typeof Icon = x => (
    <Icon {...x}>
        <path d="M198.1 172.7l22.6 22.6 95.9 95.9 22.6 22.6 6.1 6.1 11.3 11.3L368 342.6 390.6 320l-6.1-6.1-5.2-5.2L368 297.4l-6.1-6.1 22.6-22.6 98.3-98.3c39-39 39-102.2 0-141.1s-102.2-39-141.1 0l-98.3 98.3-22.6 22.6-6.1-6.1-11.3-11.3-5.2-5.2-6.1-6.1L169.4 144l11.3 11.3L192 166.6l6.1 6.1zm262-25L339.3 268.6l-95.9-95.9L364.2 51.9c26.5-26.5 69.4-26.5 95.9 0s26.5 69.4 0 95.9zM32 344l0 80L0 472l40 40 48-32 80 0L314.1 333.9l-22.6-22.6L154.7 448 88 448l-9.7 0-8.1 5.4L44.1 470.8l-2.9-2.9 17.4-26.2 5.4-8.1 0-9.7 0-66.7L200.7 220.6l-22.6-22.6L32 344z" />
    </Icon>
);

export default EyeDropper;