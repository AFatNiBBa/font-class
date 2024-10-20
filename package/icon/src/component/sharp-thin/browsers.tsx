
import { Icon } from "../../index";

/**
 * A component that renders the `browsers` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browsers?s=sharp-thin browsers}
 * @preview ![browsers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/browsers.svg)
 */
const Browsers: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 16l0 80L200 96l0-48 0-32 360 0zM112 16l72 0 0 32 0 48-72 0 0-80zm0 384l0-288 80 0 368 0 0 288-448 0zM112 0L96 0l0 16 0 384 0 16 16 0 448 0 16 0 0-16 0-384 0-16L560 0 112 0zM16 104l0-8L0 96l0 8L0 504l0 8 8 0 464 0 8 0 0-16-8 0L16 496l0-392z" />
    </Icon>
);

export default Browsers;