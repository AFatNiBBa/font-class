
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=sharp-thin toggle-on}
 * @preview ![toggle-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/toggle-on.svg)
 */
const ToggleOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 112l0 288 544 0 0-288L16 112zM0 96l16 0 544 0 16 0 0 16 0 288 0 16-16 0L16 416 0 416l0-16L0 112 0 96zm336 80l0 160 160 0 0-160-160 0zm-16-16l16 0 160 0 16 0 0 16 0 160 0 16-16 0-160 0-16 0 0-16 0-160 0-16z" />
    </Icon>
);

export default ToggleOn;