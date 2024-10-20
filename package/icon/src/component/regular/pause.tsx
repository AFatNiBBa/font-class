
import { Icon } from "../../index";

/**
 * A component that renders the `pause` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pause?s=regular pause}
 * @preview ![pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pause.svg)
 */
const Pause: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 112l0 288 48 0 0-288-48 0zM0 112C0 85.5 21.5 64 48 64l48 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-48 0c-26.5 0-48-21.5-48-48L0 112zm224 0l0 288 48 0 0-288-48 0zm-48 0c0-26.5 21.5-48 48-48l48 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-48 0c-26.5 0-48-21.5-48-48l0-288z" />
    </Icon>
);

export default Pause;