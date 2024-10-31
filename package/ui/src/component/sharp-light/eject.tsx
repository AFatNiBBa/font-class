
import { Icon } from "../../index";

/**
 * A component that renders the `eject` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eject?s=sharp-light eject}
 * @preview ![eject](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/eject.svg)
 */
const Eject: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 320l0-3.4L224 110.9 416 316.6l0 3.4L32 320zM224 64L202.1 87.4 0 304l0 16 0 32 32 0 384 0 32 0 0-32 0-16L245.9 87.4 224 64zM16 416L0 416l0 32 16 0 416 0 16 0 0-32-16 0L16 416z" />
    </Icon>
);

export default Eject;