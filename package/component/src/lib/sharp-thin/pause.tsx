
import { Icon } from "../../index";

/**
 * A component that renders the `pause` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pause?s=sharp-thin pause}
 * @preview ![pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pause.svg)
 */
const Pause: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 80l0 352 96 0 0-352L16 80zM0 64l16 0 96 0 16 0 0 16 0 352 0 16-16 0-96 0L0 448l0-16L0 80 0 64zM208 80l0 352 96 0 0-352-96 0zM192 64l16 0 96 0 16 0 0 16 0 352 0 16-16 0-96 0-16 0 0-16 0-352 0-16z" />
    </Icon>
);

export default Pause;