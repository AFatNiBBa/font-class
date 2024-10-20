
import { Icon } from "../../index";

/**
 * A component that renders the `send-backward` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-backward?s=sharp-thin send-backward}
 * @preview ![send-backward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/send-backward.svg)
 */
const SendBackward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 16L16 16l0 320 112 0 0 16L16 352 0 352l0-16L0 16 0 0 16 0 336 0l16 0 0 16 0 112-16 0 0-112zM288 128l-16 0 0-48L80 80l0 192 48 0 0 16-48 0-16 0 0-16L64 80l0-16 16 0 192 0 16 0 0 16 0 48zM160 160l16 0 320 0 16 0 0 16 0 320 0 16-16 0-320 0-16 0 0-16 0-320 0-16zm16 16l0 320 320 0 0-320-320 0z" />
    </Icon>
);

export default SendBackward;