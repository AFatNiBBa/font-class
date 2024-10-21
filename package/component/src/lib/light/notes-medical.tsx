
import { Icon } from "../../index";

/**
 * A component that renders the `notes-medical` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes-medical?s=light notes-medical}
 * @preview ![notes-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/notes-medical.svg)
 */
const NotesMedical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 96c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 197.5c0 8.5-3.4 16.6-9.4 22.6l-58.5 58.5c-6 6-14.1 9.4-22.6 9.4L160 384c-17.7 0-32-14.3-32-32l0-256zM96 96l0 256c0 35.3 28.7 64 64 64l197.5 0c17 0 33.3-6.7 45.3-18.7l58.5-58.5c12-12 18.7-28.3 18.7-45.3L480 96c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zM320 496c0-8.8-7.2-16-16-16l-176 0c-53 0-96-43-96-96l0-240c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 384c0 70.7 57.3 128 128 128l176 0c8.8 0 16-7.2 16-16zM272 112c-17.7 0-32 14.3-32 32l0 32-32 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-32 0 0-32c0-17.7-14.3-32-32-32l-32 0zm0 32l32 0 0 48c0 8.8 7.2 16 16 16l48 0 0 32-48 0c-8.8 0-16 7.2-16 16l0 48-32 0 0-48c0-8.8-7.2-16-16-16l-48 0 0-32 48 0c4.2 0 8.3-1.7 11.3-4.7s4.7-7.1 4.7-11.3l0-48z" />
    </Icon>
);

export default NotesMedical;