
import { Icon } from "../../index";

/**
 * A component that renders the `road` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road?s=sharp-regular road}
 * @preview ![road](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/road.svg)
 */
const Road: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M63.6 432L264 432l0-24 0-24 48 0 0 24 0 24 200.4 0L411.8 80 312 80l0 24 0 24-48 0 0-24 0-24-99.8 0L63.6 432zM312 32l136 0L562.3 432 576 480l-49.9 0L49.9 480 0 480l13.7-48L128 32l136 0 48 0zm0 184l0 80 0 24-48 0 0-24 0-80 0-24 48 0 0 24z" />
    </Icon>
);

export default Road;