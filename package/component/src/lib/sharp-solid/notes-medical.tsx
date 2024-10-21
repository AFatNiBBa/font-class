
import { Icon } from "../../index";

/**
 * A component that renders the `notes-medical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes-medical?s=sharp-solid notes-medical}
 * @preview ![notes-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/notes-medical.svg)
 */
const NotesMedical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 416L96 32l384 0 0 288-96 96L96 416zM320 128l-64 0 0 64-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64zM296 464l24 0 0 48-24 0L24 512 0 512l0-24L0 152l0-24 48 0 0 24 0 312 248 0z" />
    </Icon>
);

export default NotesMedical;