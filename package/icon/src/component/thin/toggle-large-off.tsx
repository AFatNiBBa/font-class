
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-large-off` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-large-off?s=thin toggle-large-off}
 * @preview ![toggle-large-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/toggle-large-off.svg)
 */
const ToggleLargeOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 400a144 144 0 1 1 0-288 144 144 0 1 1 0 288zm0 16l256 0c88.4 0 160-71.6 160-160s-71.6-160-160-160L160 96C71.6 96 0 167.6 0 256s71.6 160 160 160zm69.8-16c53.4-25.9 90.2-80.7 90.2-144s-36.8-118.1-90.2-144L416 112c79.5 0 144 64.5 144 144s-64.5 144-144 144l-186.2 0z" />
    </Icon>
);

export default ToggleLargeOff;