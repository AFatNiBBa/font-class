
import { Icon } from "../../index";

/**
 * A component that renders the `bring-forward` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-forward?s=sharp-solid bring-forward}
 * @preview ![bring-forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bring-forward.svg)
 */
const BringForward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 448l224 0 0-224-64 0 0-64 64 0 64 0 0 64 0 224 0 64-64 0-224 0-64 0 0-64 0-64 64 0 0 64zM0 352L0 0 352 0l0 352L0 352z" />
    </Icon>
);

export default BringForward;