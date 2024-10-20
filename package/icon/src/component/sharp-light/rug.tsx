
import { Icon } from "../../index";

/**
 * A component that renders the `rug` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rug?s=sharp-light rug}
 * @preview ![rug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rug.svg)
 */
const Rug: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 64L0 64 0 96l16 0 16 0 0 64-16 0L0 160l0 32 16 0 16 0 0 48-16 0L0 240l0 32 16 0 16 0 0 48-16 0L0 320l0 32 16 0 16 0 0 64-16 0L0 416l0 32 16 0 16 0 16 0 16 0 512 0 16 0 16 0 16 0 16 0 0-32-16 0-16 0 0-64 16 0 16 0 0-32-16 0-16 0 0-48 16 0 16 0 0-32-16 0-16 0 0-48 16 0 16 0 0-32-16 0-16 0 0-64 16 0 16 0 0-32-16 0-16 0-16 0-16 0L64 64 48 64 32 64 16 64zM64 96l64 0 0 320-64 0 0-64 0-32 0-48 0-32 0-48 0-32 0-64zm448 0l64 0 0 64 0 32 0 48 0 32 0 48 0 32 0 64-64 0 0-320zm-32 0l0 320-320 0 0-320 320 0z" />
    </Icon>
);

export default Rug;