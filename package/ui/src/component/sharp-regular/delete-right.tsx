
import { Icon } from "../../index";

/**
 * A component that renders the `delete-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-right?s=sharp-regular delete-right}
 * @preview ![delete-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/delete-right.svg)
 */
const DeleteRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 448l48 0 352 0L576 256 400 64 48 64 0 64l0 48L0 400l0 48zM510.9 256l-132 144L48 400l0-288 330.9 0 132 144zM321.9 192L288 158.1l-17 17-47 47-47-47-17-17L126.1 192l17 17 47 47-47 47-17 17L160 353.9l17-17 47-47 47 47 17 17L321.9 320l-17-17-47-47 47-47 17-17z" />
    </Icon>
);

export default DeleteRight;