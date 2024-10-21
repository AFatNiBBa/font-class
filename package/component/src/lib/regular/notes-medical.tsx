
import { Icon } from "../../index";

/**
 * A component that renders the `notes-medical` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes-medical?s=regular notes-medical}
 * @preview ![notes-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/notes-medical.svg)
 */
const NotesMedical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 96c0-8.8 7.2-16 16-16l256 0c8.8 0 16 7.2 16 16l0 197.5c0 4.2-1.7 8.3-4.7 11.3l-58.5 58.5c-3 3-7.1 4.7-11.3 4.7L160 368c-8.8 0-16-7.2-16-16l0-256zM96 96l0 256c0 35.3 28.7 64 64 64l197.5 0c17 0 33.3-6.7 45.3-18.7l58.5-58.5c12-12 18.7-28.3 18.7-45.3L480 96c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zm176 32c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0zm24 336l-160 0c-48.6 0-88-39.4-88-88l0-224c0-13.3-10.7-24-24-24s-24 10.7-24 24L0 376c0 75.1 60.9 136 136 136l160 0c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
    </Icon>
);

export default NotesMedical;