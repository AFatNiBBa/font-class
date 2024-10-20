
import { Icon } from "../../index";

/**
 * A component that renders the `pause` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pause?s=sharp-regular pause}
 * @preview ![pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pause.svg)
 */
const Pause: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 112l0 288 48 0 0-288-48 0zM0 64l48 0 48 0 48 0 0 48 0 288 0 48-48 0-48 0L0 448l0-48L0 112 0 64zm224 48l0 288 48 0 0-288-48 0zM176 64l48 0 48 0 48 0 0 48 0 288 0 48-48 0-48 0-48 0 0-48 0-288 0-48z" />
    </Icon>
);

export default Pause;