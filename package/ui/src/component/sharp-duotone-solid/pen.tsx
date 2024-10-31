
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen?s=sharp-duotone-solid pen}
 * @preview ![pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pen.svg)
 */
const Pen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M288 96L416 224l96-96L384 0 288 96z" />
        <path d="M32 352L0 512l160-32L416 224 288 96 32 352z" />
    </Icon>
);

export default Pen;