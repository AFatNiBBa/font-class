
import { Icon } from "../../index";

/**
 * A component that renders the `microscope` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microscope?s=regular microscope}
 * @preview ![microscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/microscope.svg)
 */
const Microscope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 0c-17.7 0-32 14.3-32 32c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32c0-17.7-14.3-32-32-32L192 0zM176 272l0-192 64 0 0 192-64 0zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l296 0 168 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-41 0c39.9-35.2 65-86.7 65-144c0-106-86-192-192-192c0 0 0 0 0 0l0 48s0 0 0 0c79.5 0 144 64.5 144 144s-64.5 144-144 144c0 0 0 0 0 0L24 464zm72-56c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24z" />
    </Icon>
);

export default Microscope;