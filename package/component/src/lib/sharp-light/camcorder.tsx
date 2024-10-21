
import { Icon } from "../../index";

/**
 * A component that renders the `camcorder` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camcorder?s=sharp-light camcorder}
 * @preview ![camcorder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/camcorder.svg)
 */
const Camcorder: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 32L64 32l0 16 0 112-32 0L0 160l0 32L0 448l0 32 32 0 320 0 32 0 0-32 0-49.5 0-157 0-49.5 0-32-32 0L96 160l0-96 208 0 16 0 0-32-16 0L80 32zM64 192l32 0 256 0 0 256L32 448l0-256 32 0zM544 466.5L576 480l0-34.7 0-250.5 0-34.7-32 13.5L416 227.7l0 34.7 128-54.2 0 223.4L416 377.6l0 34.7 128 54.2zM64 224l0 32 16 0 224 0 16 0 0-32-16 0L80 224l-16 0z" />
    </Icon>
);

export default Camcorder;