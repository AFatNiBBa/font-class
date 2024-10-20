
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-large-on` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-on?s=thin toggle-large-on}
 * @preview ![toggle-large-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/toggle-large-on.svg)
 */
const ToggleLargeOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M416 112a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 304l-256 0C71.6 416 0 344.4 0 256S71.6 96 160 96l256 0c88.4 0 160 71.6 160 160s-71.6 160-160 160zm-69.8-16C292.8 374.1 256 319.3 256 256s36.8-118.1 90.2-144L160 112C80.5 112 16 176.5 16 256s64.5 144 144 144l186.2 0z" />
    </Icon>
);

export default ToggleLargeOn;