
import { Icon } from "../../index";

/**
 * A component that renders the `rhombus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rhombus?s=sharp-regular rhombus}
 * @preview ![rhombus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rhombus.svg)
 */
const Rhombus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192.1 475.6L224 512l31.9-36.4L448 256 255.9 36.4 224 0 192.1 36.4 0 256 192.1 475.6zM224 439.1L63.8 256 224 72.9 384.2 256 224 439.1z" />
    </Icon>
);

export default Rhombus;