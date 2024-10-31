
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-military-pointing` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-military-pointing?s=sharp-duotone-solid person-military-pointing}
 * @preview ![person-military-pointing](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-military-pointing.svg)
 */
const PersonMilitaryPointing: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M224 393.4l0 54.6 192 0 0-32-169.4 0C307.3 355.3 368 294.6 428.7 233.9l-5.9-9.9L400 224l-6.6 0L224 393.4zM240 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-11.4-2.4-22.2-6.7-32L246.7 80c-4.3 9.8-6.7 20.6-6.7 32z" />
        <path d="M416 0l0 80L224 80l0-48L416 0zM393.4 224L224 393.4l0-89.4L72 304l-40 0 0-80 40 0 168 0 153.4 0zM224 448l192 0 0 64-192 0 0-64zm192-32l-169.4 0L428.7 233.9l5.7 9.7 104 176 20.4 34.4-68.9 40.7-20.3-34.4L416 369.7l0 46.3z" />
    </Icon>
);

export default PersonMilitaryPointing;