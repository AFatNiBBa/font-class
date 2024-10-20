
import { Icon } from "../../index";

/**
 * A component that renders the `pause` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pause?s=thin pause}
 * @preview ![pause](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pause.svg)
 */
const Pause: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 80c-17.7 0-32 14.3-32 32l0 288c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-288c0-17.7-14.3-32-32-32L48 80zM0 112C0 85.5 21.5 64 48 64l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 112zM240 80c-17.7 0-32 14.3-32 32l0 288c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-288c0-17.7-14.3-32-32-32l-32 0zm-48 32c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288z" />
    </Icon>
);

export default Pause;