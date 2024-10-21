
import { Icon } from "../../index";

/**
 * A component that renders the `align-center` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-center?s=solid align-center}
 * @preview ![align-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/align-center.svg)
 */
const AlignCenter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 64c0-17.7-14.3-32-32-32L128 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32L32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32z" />
    </Icon>
);

export default AlignCenter;