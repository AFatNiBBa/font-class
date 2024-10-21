
import { Icon } from "../../index";

/**
 * A component that renders the `notes` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=sharp-solid notes}
 * @preview ![notes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/notes.svg)
 */
const Notes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 32L96 32l0 384 256 0 0-96 0-32 32 0 96 0 0-256zM384 352l0 45.7 0 18.3 96-96-18.3 0L416 320l-32 0 0 32zM296 464L48 464l0-312 0-24L0 128l0 24L0 488l0 24 24 0 272 0 24 0 0-48-24 0z" />
    </Icon>
);

export default Notes;