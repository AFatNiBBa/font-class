
import { Icon } from "../../index";

/**
 * A component that renders the `notes-medical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes-medical?s=sharp-regular notes-medical}
 * @preview ![notes-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/notes-medical.svg)
 */
const NotesMedical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 416l-48 0 0-48L96 80l0-48 48 0 288 0 48 0 0 48 0 240-96 96-240 0zm220.1-48L432 300.1 432 80 144 80l0 288 220.1 0zM320 128l0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64 64 0zM296 464l24 0 0 48-24 0L24 512 0 512l0-24L0 152l0-24 48 0 0 24 0 312 248 0z" />
    </Icon>
);

export default NotesMedical;