
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-large-on` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-on?s=sharp-thin toggle-large-on}
 * @preview ![toggle-large-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/toggle-large-on.svg)
 */
const ToggleLargeOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 112l-288 0 0 288 288 0 0-288zM272 416l-16 0L16 416 0 416l0-16L0 112 0 96l16 0 240 0 16 0 288 0 16 0 0 16 0 288 0 16-16 0-288 0zm-16-16l0-288L16 112l0 288 240 0zm80-224l0 160 160 0 0-160-160 0zm-16-16l16 0 160 0 16 0 0 16 0 160 0 16-16 0-160 0-16 0 0-16 0-160 0-16z" />
    </Icon>
);

export default ToggleLargeOn;