
import { Icon, generic } from "../../index";

/**
 * A component that renders the `notes` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=duotone notes}
 * @preview ![notes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/notes.svg)
 */
const Notes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 96l0 256c0 35.3 28.7 64 64 64l192 0 0-96c0-17.7 14.3-32 32-32l96 0 0-192c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64z" />
        <path d="M296 464c13.3 0 24 10.7 24 24s-10.7 24-24 24l-160 0C60.9 512 0 451.1 0 376L0 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 224c0 48.6 39.4 88 88 88l160 0zm56-48l0-96c0-17.7 14.3-32 32-32l96 0L352 416z" />
    </Icon>
);

export default Notes;