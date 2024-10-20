
import { Icon } from "../../index";

/**
 * A component that renders the `rhombus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rhombus?s=sharp-thin rhombus}
 * @preview ![rhombus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/rhombus.svg)
 */
const Rhombus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M213.4 499.9L224 512l10.6-12.1L448 256 234.6 12.1 224 0 213.4 12.1 0 256 213.4 499.9zM224 487.7L21.3 256 224 24.3 426.7 256 224 487.7z" />
    </Icon>
);

export default Rhombus;