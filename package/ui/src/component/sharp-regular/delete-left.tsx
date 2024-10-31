
import { Icon } from "../../index";

/**
 * A component that renders the `delete-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-left?s=sharp-regular delete-left}
 * @preview ![delete-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/delete-left.svg)
 */
const DeleteLeft: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 448l-48 0-352 0L0 256 176 64l352 0 48 0 0 48 0 288 0 48zM65.1 256l132 144L528 400l0-288-330.9 0L65.1 256zm188.9-64L288 158.1l17 17 47 47 47-47 17-17L449.9 192l-17 17-47 47 47 47 17 17L416 353.9l-17-17-47-47-47 47-17 17L254.1 320l17-17 47-47-47-47-17-17z" />
    </Icon>
);

export default DeleteLeft;