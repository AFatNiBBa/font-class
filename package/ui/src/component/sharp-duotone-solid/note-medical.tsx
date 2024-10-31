
import { Icon, generic } from "../../index";

/**
 * A component that renders the `note-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-medical?s=sharp-duotone-solid note-medical}
 * @preview ![note-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/note-medical.svg)
 */
const NoteMedical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 288-32 0-32 0-96 0 0 96 0 32 0 32L0 480 0 32zM128 192l0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0 0 64-64 0z" />
        <path d="M192 128l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64zm96 288l0-96 96 0 32 0 32 0 0 16 0 13.3-9.4 9.4-112 112-9.4 9.4L304 480l-16 0 0-32 0-32z" />
    </Icon>
);

export default NoteMedical;