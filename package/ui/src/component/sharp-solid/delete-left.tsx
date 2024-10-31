
import { Icon } from "../../index";

/**
 * A component that renders the `delete-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-left?s=sharp-solid delete-left}
 * @preview ![delete-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/delete-left.svg)
 */
const DeleteLeft: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 64l0 384-400 0L0 256 176 64l400 0zM254.1 192l17 17 47 47-47 47-17 17L288 353.9l17-17 47-47 47 47 17 17L449.9 320l-17-17-47-47 47-47 17-17L416 158.1l-17 17-47 47-47-47-17-17L254.1 192z" />
    </Icon>
);

export default DeleteLeft;