
import { Icon } from "../../index";

/**
 * A component that renders the `microscope` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microscope?s=sharp-solid microscope}
 * @preview ![microscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/microscope.svg)
 */
const Microscope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 0l96 0 0 32 32 0 0 288-32 0 0 32-96 0 0-32-32 0 0-288 32 0 0-32zM32 448l288 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l0-64c106 0 192 86 192 192c0 49.2-18.5 94-48.9 128l16.9 0 32 0 0 64-32 0-160 0L32 512 0 512l0-64 32 0zm80-64l192 0 16 0 0 32-16 0-192 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Microscope;