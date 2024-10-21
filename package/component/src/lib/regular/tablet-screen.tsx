
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-screen` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen?s=regular tablet-screen}
 * @preview ![tablet-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tablet-screen.svg)
 */
const TabletScreen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 448c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-80L48 368l0 80zm0-128l352 0 0-256c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 256zM0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM192 400l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default TabletScreen;