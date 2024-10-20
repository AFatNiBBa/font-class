
import { Icon } from "../../index";

/**
 * A component that renders the `microwave` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microwave?s=sharp-regular microwave}
 * @preview ![microwave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/microwave.svg)
 */
const Microwave: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 80l0 320L48 400 48 80l480 0zM48 32L0 32 0 80 0 400l0 48 48 0 16 0 0 32 48 0 0-32 352 0 0 32 48 0 0-32 16 0 48 0 0-48 0-320 0-48-48 0L48 32zm384 80l0 256 48 0 0-256-48 0zm-48 16L96 128l0 224 288 0 0-224z" />
    </Icon>
);

export default Microwave;