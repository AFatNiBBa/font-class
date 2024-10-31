
import { Icon } from "../../index";

/**
 * A component that renders the `microscope` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microscope?s=sharp-regular microscope}
 * @preview ![microscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/microscope.svg)
 */
const Microscope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0L160 0l0 32-32 0 0 48 0 192 0 48 32 0 0 32 96 0 0-32 32 0 0-48 0-192 0-48-32 0 0-32zM176 80l64 0 0 192-64 0 0-192zM24 464L0 464l0 48 24 0 296 0 168 0 24 0 0-48-24 0-41 0c39.9-35.2 65-86.7 65-144c0-106-86-192-192-192c0 0 0 0 0 0l0 48s0 0 0 0c79.5 0 144 64.5 144 144s-64.5 144-144 144c0 0 0 0 0 0L24 464zm72-80l0 48 24 0 176 0 24 0 0-48-24 0-176 0-24 0z" />
    </Icon>
);

export default Microscope;