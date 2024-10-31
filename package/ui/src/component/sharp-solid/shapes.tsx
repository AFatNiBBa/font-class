
import { Icon } from "../../index";

/**
 * A component that renders the `shapes` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shapes?s=sharp-solid shapes}
 * @preview ![shapes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shapes.svg)
 */
const Shapes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 224l256 0L288 0 160 224zm128 48l0 224 224 0 0-224-224 0zM128 512a128 128 0 1 0 0-256 128 128 0 1 0 0 256z" />
    </Icon>
);

export default Shapes;