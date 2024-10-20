
import { Icon } from "../../index";

/**
 * A component that renders the `note-medical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-medical?s=sharp-regular note-medical}
 * @preview ![note-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/note-medical.svg)
 */
const NoteMedical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 240-112 0 0 112L48 432 48 80l352 0zM48 480l240 0 32 0L448 352l0-32 0-240 0-48-48 0L48 32 0 32 0 80 0 432l0 48 48 0zM192 128l0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0z" />
    </Icon>
);

export default NoteMedical;