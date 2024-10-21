
import { Icon } from "../../index";

/**
 * A component that renders the `shutters` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shutters?s=sharp-regular shutters}
 * @preview ![shutters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/shutters.svg)
 */
const Shutters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 32L0 32 0 80l24 0 464 0 24 0 0-48-24 0L24 32zm-8 96L8 176 0 224l48.7 0 414.7 0 48.7 0-8-48-8-48-48.7 0 8 48L56.7 176l8-48L16 128zM8 304L0 352l48.7 0 414.7 0 48.7 0-8-48-8-48-48.7 0 8 48L56.7 304l8-48L16 256 8 304zM8 432L0 480l48.7 0 414.7 0 48.7 0-8-48-8-48-48.7 0 8 48L56.7 432l8-48L16 384 8 432z" />
    </Icon>
);

export default Shutters;