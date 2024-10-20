
import { Icon, generic } from "../../index";

/**
 * A component that renders the `notes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=sharp-duotone-solid notes}
 * @preview ![notes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/notes.svg)
 */
const Notes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 32l0 384 256 0 0-128 128 0 0-256L96 32z" />
        <path d="M296 464l24 0 0 48-24 0L24 512 0 512l0-24L0 152l0-24 48 0 0 24 0 312 248 0zm56-48l0-128 128 0L352 416z" />
    </Icon>
);

export default Notes;