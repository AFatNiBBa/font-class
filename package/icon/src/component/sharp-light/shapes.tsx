
import { Icon } from "../../index";

/**
 * A component that renders the `shapes` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shapes?s=sharp-light shapes}
 * @preview ![shapes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/shapes.svg)
 */
const Shapes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M178.3 192L269.6 32.2 288 0l18.4 32.2L397.7 192 416 224l-36.9 0-182.3 0L160 224l18.3-32zm182.6 0L288 64.5 215.1 192l145.7 0zM480 304l-160 0 0 160 160 0 0-160zM320 272l160 0 32 0 0 32 0 160 0 32-32 0-160 0-32 0 0-32 0-160 0-32 32 0zM224 384A96 96 0 1 0 32 384a96 96 0 1 0 192 0zM0 384a128 128 0 1 1 256 0A128 128 0 1 1 0 384z" />
    </Icon>
);

export default Shapes;