
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comma` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comma?s=sharp-duotone-solid comma}
 * @preview ![comma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/comma.svg)
 */
const Comma: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M48 288L16 512H80l80-224H48z" />
    </Icon>
);

export default Comma;