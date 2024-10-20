
import { Icon } from "../../index";

/**
 * A component that renders the `notes` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=regular notes}
 * @preview ![notes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/notes.svg)
 */
const Notes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 96c0-8.8 7.2-16 16-16l256 0c8.8 0 16 7.2 16 16l0 192-48 0c-17.7 0-32 14.3-32 32l0 48-192 0c-8.8 0-16-7.2-16-16l0-256zM96 96l0 256c0 35.3 28.7 64 64 64l197.5 0c17 0 33.3-6.7 45.3-18.7l58.5-58.5c12-12 18.7-28.3 18.7-45.3L480 96c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zM320 488c0-13.3-10.7-24-24-24l-160 0c-48.6 0-88-39.4-88-88l0-224c0-13.3-10.7-24-24-24s-24 10.7-24 24L0 376c0 75.1 60.9 136 136 136l160 0c13.3 0 24-10.7 24-24z" />
    </Icon>
);

export default Notes;