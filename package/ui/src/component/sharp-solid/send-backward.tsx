
import { Icon } from "../../index";

/**
 * A component that renders the `send-backward` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-backward?s=sharp-solid send-backward}
 * @preview ![send-backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/send-backward.svg)
 */
const SendBackward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 0L0 0 0 352l128 0 0-192 0-32 32 0 192 0L352 0zM224 224l224 0 0 224-224 0 0-224zm-64-64l0 64 0 224 0 64 64 0 224 0 64 0 0-64 0-224 0-64-64 0-224 0-64 0z" />
    </Icon>
);

export default SendBackward;