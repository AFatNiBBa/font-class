
import { Icon } from "../../index";

/**
 * A component that renders the `toilet-portable` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-portable?s=sharp-regular toilet-portable}
 * @preview ![toilet-portable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/toilet-portable.svg)
 */
const ToiletPortable: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M24 0L0 0 0 24 0 488l0 24 48 0 0-24 0-8 224 0 0 8 0 24 48 0 0-24 0-464 0-24L296 0 24 0zM272 432L48 432l0-288 224 0 0 80-48 0 0 96 48 0 0 112zM48 96l0-48 224 0 0 48L48 96z" />
    </Icon>
);

export default ToiletPortable;