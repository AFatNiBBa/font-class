
import { Icon } from "../../index";

/**
 * A component that renders the `pager` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pager?s=sharp-solid pager}
 * @preview ![pager](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pager.svg)
 */
const Pager: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64l512 0 0 384L0 448 0 64zm64 64l0 128 384 0 0-128L64 128zM80 320l-24 0 0 48 24 0 56 0 24 0 0-48-24 0-56 0zm136 0l-24 0 0 48 24 0 48 0 24 0 0-48-24 0-48 0z" />
    </Icon>
);

export default Pager;