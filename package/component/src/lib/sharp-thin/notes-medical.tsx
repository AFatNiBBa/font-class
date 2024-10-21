
import { Icon } from "../../index";

/**
 * A component that renders the `notes-medical` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes-medical?s=sharp-thin notes-medical}
 * @preview ![notes-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/notes-medical.svg)
 */
const NotesMedical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 416l-16 0 0-16L96 48l0-16 16 0 352 0 16 0 0 16 0 272-96 96-272 0zm265.4-16L464 313.4 464 48 112 48l0 352 265.4 0zM248 112l8 0 64 0 8 0 0 8 0 64 64 0 8 0 0 8 0 64 0 8-8 0-64 0 0 64 0 8-8 0-64 0-8 0 0-8 0-64-64 0-8 0 0-8 0-64 0-8 8 0 64 0 0-64 0-8zm16 16l0 64 0 8-8 0-64 0 0 48 64 0 8 0 0 8 0 64 48 0 0-64 0-8 8 0 64 0 0-48-64 0-8 0 0-8 0-64-48 0zM16 128l48 0 0 16-48 0 0 352 352 0 0-48 16 0 0 48 0 16-16 0L16 512 0 512l0-16L0 144l0-16 16 0z" />
    </Icon>
);

export default NotesMedical;