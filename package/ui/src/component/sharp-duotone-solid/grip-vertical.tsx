
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grip-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-vertical?s=sharp-duotone-solid grip-vertical}
 * @preview ![grip-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grip-vertical.svg)
 */
const GripVertical: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M192 32l128 0 0 128-128 0 0-128zm0 160l128 0 0 128-128 0 0-128zm0 160l128 0 0 128-128 0 0-128z" />
        <path d="M0 480l128 0 0-128L0 352 0 480zM0 320l128 0 0-128L0 192 0 320zM0 32L0 160l128 0 0-128L0 32z" />
    </Icon>
);

export default GripVertical;