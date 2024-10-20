
import { Icon, generic } from "../../index";

/**
 * A component that renders the `police-box` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/police-box?s=sharp-duotone-solid police-box}
 * @preview ![police-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/police-box.svg)
 */
const PoliceBox: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 464l32 0 320 0 32 0 0 48L0 512l0-48zM96 128l32 0 0 32-32 0 0-32zm0 48l32 0 0 32-32 0 0-32zm48-48l32 0 0 32-32 0 0-32zm0 48l32 0 0 32-32 0 0-32zM176 0l32 0 0 16 0 16-32 0 0-16 0-16zm32 128l32 0 0 32-32 0 0-32zm0 48l32 0 0 32-32 0 0-32zm48-48l32 0 0 32-32 0 0-32zm0 48l32 0 0 32-32 0 0-32z" />
        <path d="M320 32L64 32l0 32L32 64l0 400 320 0 0-400-32 0 0-32zM96 128l32 0 0 32-32 0 0-32zm0 48l32 0 0 32-32 0 0-32zm80-48l0 32-32 0 0-32 32 0zm-32 48l32 0 0 32-32 0 0-32zm96-48l0 32-32 0 0-32 32 0zm0 48l0 32-32 0 0-32 32 0zm16-48l32 0 0 32-32 0 0-32zm32 48l0 32-32 0 0-32 32 0zM96 240l80 0 0 80-80 0 0-80z" />
    </Icon>
);

export default PoliceBox;