
import { Icon } from "../../index";

/**
 * A component that renders the `shapes` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shapes?s=sharp-regular shapes}
 * @preview ![shapes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/shapes.svg)
 */
const Shapes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 224l55.3 0 145.4 0 55.3 0-27.4-48L315.6 48.4 288 0 260.4 48.4 187.4 176 160 224zM288 96.7L333.3 176l-90.6 0L288 96.7zM128 304a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 208a128 128 0 1 0 0-256 128 128 0 1 0 0 256zM464 320l0 128-128 0 0-128 128 0zM336 272l-48 0 0 48 0 128 0 48 48 0 128 0 48 0 0-48 0-128 0-48-48 0-128 0z" />
    </Icon>
);

export default Shapes;