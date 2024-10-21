
import { Icon } from "../../index";

/**
 * A component that renders the `delete-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-right?s=sharp-solid delete-right}
 * @preview ![delete-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/delete-right.svg)
 */
const DeleteRight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 64L0 448l400 0L576 256 400 64 0 64zM177 175l47 47 47-47 17-17L321.9 192l-17 17-47 47 47 47 17 17L288 353.9l-17-17-47-47-47 47-17 17L126.1 320l17-17 47-47-47-47-17-17L160 158.1l17 17z" />
    </Icon>
);

export default DeleteRight;