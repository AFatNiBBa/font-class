
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shapes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shapes?s=sharp-duotone-solid shapes}
 * @preview ![shapes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shapes.svg)
 */
const Shapes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384a128 128 0 1 0 256 0A128 128 0 1 0 0 384zM160 224l256 0L288 0 160 224z" />
        <path d="M288 272H512V496H288V272z" />
    </Icon>
);

export default Shapes;