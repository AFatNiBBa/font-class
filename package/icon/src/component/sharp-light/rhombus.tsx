
import { Icon } from "../../index";

/**
 * A component that renders the `rhombus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rhombus?s=sharp-light rhombus}
 * @preview ![rhombus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rhombus.svg)
 */
const Rhombus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M202.7 487.7L224 512l21.3-24.3L448 256 245.3 24.3 224 0 202.7 24.3 0 256 202.7 487.7zM224 463.4L42.5 256 224 48.6 405.5 256 224 463.4z" />
    </Icon>
);

export default Rhombus;