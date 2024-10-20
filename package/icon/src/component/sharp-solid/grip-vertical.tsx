
import { Icon } from "../../index";

/**
 * A component that renders the `grip-vertical` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grip-vertical?s=sharp-solid grip-vertical}
 * @preview ![grip-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/grip-vertical.svg)
 */
const GripVertical: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 352l128 0 0 128L0 480 0 352zm192 0l128 0 0 128-128 0 0-128zM0 320L0 192l128 0 0 128L0 320zM192 192l128 0 0 128-128 0 0-128zM0 160L0 32l128 0 0 128L0 160zM192 32l128 0 0 128-128 0 0-128z" />
    </Icon>
);

export default GripVertical;