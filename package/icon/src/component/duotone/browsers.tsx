
import { Icon, generic } from "../../index";

/**
 * A component that renders the `browsers` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browsers?s=duotone browsers}
 * @preview ![browsers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/browsers.svg)
 */
const Browsers: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 192l480 0 0 160c0 35.3-28.7 64-64 64l-352 0c-35.3 0-64-28.7-64-64l0-160zM224 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M160 0C124.7 0 96 28.7 96 64l0 128 480 0 0-128c0-35.3-28.7-64-64-64L160 0zm32 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm64-32c0-13.3 10.7-24 24-24l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 376c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-256z" />
    </Icon>
);

export default Browsers;