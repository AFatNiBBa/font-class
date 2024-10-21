
import { Icon } from "../../index";

/**
 * A component that renders the `note-medical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-medical?s=sharp-solid note-medical}
 * @preview ![note-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/note-medical.svg)
 */
const NoteMedical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 288-128 0-32 0 0 32 0 128L0 480 0 32zM402.7 352l45.3 0-32 32-64 64-32 32 0-45.3 0-50.7 0-32 32 0 50.7 0zM192 128l0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0z" />
    </Icon>
);

export default NoteMedical;