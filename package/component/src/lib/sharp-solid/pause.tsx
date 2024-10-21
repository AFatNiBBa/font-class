
import { Icon } from "../../index";

/**
 * A component that renders the `pause` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pause?s=sharp-solid pause}
 * @preview ![pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pause.svg)
 */
const Pause: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M128 64L0 64 0 448l128 0 0-384zm192 0L192 64l0 384 128 0 0-384z" />
    </Icon>
);

export default Pause;