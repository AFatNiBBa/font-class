
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pager` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pager?s=sharp-duotone-solid pager}
 * @preview ![pager](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pager.svg)
 */
const Pager: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64l512 0 0 384L0 448 0 64zM56 320l0 48 24 0 56 0 24 0 0-48-24 0-56 0-24 0zm8-192l0 128 384 0 0-128L64 128zM192 320l0 48 24 0 48 0 24 0 0-48-24 0-48 0-24 0z" />
        <path d="M64 128H448V256H64V128z" />
    </Icon>
);

export default Pager;