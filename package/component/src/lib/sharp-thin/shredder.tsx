
import { Icon } from "../../index";

/**
 * A component that renders the `shredder` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shredder?s=sharp-thin shredder}
 * @preview ![shredder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/shredder.svg)
 */
const Shredder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 16l0 176 352 0 0-121.4L377.4 16 80 16zM448 192l48 0 16 0 0 16 0 160 0 16-16 0L16 384 0 384l0-16L0 208l0-16 16 0 48 0L64 16 64 0 80 0 384 0l64 64 0 128zM16 208l0 160 480 0 0-160L16 208zM56 416l16 0 0 88 0 8-16 0 0-8 0-88zm96 0l16 0 0 88 0 8-16 0 0-8 0-88zm96 0l16 0 0 88 0 8-16 0 0-8 0-88zm96 0l16 0 0 88 0 8-16 0 0-8 0-88zm96 0l16 0 0 88 0 8-16 0 0-8 0-88zm8-128l-32 0 0-32 32 0 0 32z" />
    </Icon>
);

export default Shredder;