
import { Icon } from "../../index";

/**
 * A component that renders the `notes` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=solid notes}
 * @preview ![notes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/notes.svg)
 */
const Notes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 32c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l179.2 0c4.3 0 8.6-.4 12.8-1.3l0-94.7c0-17.7 14.3-32 32-32l94.7 0c.9-4.2 1.3-8.5 1.3-12.8L480 96c0-35.3-28.7-64-64-64L160 32zM384 352l0 45.7 0 18.3 96-96-18.3 0L416 320l-32 0 0 32zM296 464l-160 0c-48.6 0-88-39.4-88-88l0-224c0-13.3-10.7-24-24-24s-24 10.7-24 24L0 376c0 75.1 60.9 136 136 136l160 0c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
    </Icon>
);

export default Notes;