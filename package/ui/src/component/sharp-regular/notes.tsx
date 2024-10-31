
import { Icon } from "../../index";

/**
 * A component that renders the `notes` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=sharp-regular notes}
 * @preview ![notes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/notes.svg)
 */
const Notes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 416l-48 0 0-48L96 80l0-48 48 0 288 0 48 0 0 48 0 240-96 96-240 0zM432 288l0-208L144 80l0 288 208 0 0-80 80 0zM320 464l0 48-24 0L24 512 0 512l0-24L0 152l0-24 48 0 0 24 0 312 248 0 24 0z" />
    </Icon>
);

export default Notes;