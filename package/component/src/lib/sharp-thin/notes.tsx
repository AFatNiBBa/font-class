
import { Icon } from "../../index";

/**
 * A component that renders the `notes` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=sharp-thin notes}
 * @preview ![notes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/notes.svg)
 */
const Notes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 416l-16 0 0-16L96 48l0-16 16 0 352 0 16 0 0 16 0 256L368 416l-256 0zm256-22.6L457.4 304 368 304l0 89.4zM352 400l0-104 0-8 8 0 104 0 0-240L112 48l0 352 240 0zM64 128l0 16-48 0 0 352 352 0 0-48 16 0 0 48 0 16-16 0L16 512 0 512l0-16L0 144l0-16 16 0 48 0z" />
    </Icon>
);

export default Notes;