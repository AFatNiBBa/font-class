
import { Icon, generic } from "../../index";

/**
 * A component that renders the `microscope` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microscope?s=duotone microscope}
 * @preview ![microscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/microscope.svg)
 */
const Microscope: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 400c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-192 0c-8.8 0-16 7.2-16 16zM160 32l96 0c0-17.7-14.3-32-32-32L192 0c-17.7 0-32 14.3-32 32z" />
        <path d="M128 64c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32c-17.7 0-32-14.3-32-32l0-224zM512 320c0 49.2-18.5 94-48.9 128l16.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l288 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l0-64c106 0 192 86 192 192z" />
    </Icon>
);

export default Microscope;