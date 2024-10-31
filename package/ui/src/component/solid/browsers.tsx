
import { Icon } from "../../index";

/**
 * A component that renders the `browsers` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browsers?s=solid browsers}
 * @preview ![browsers](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/browsers.svg)
 */
const Browsers: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 0C124.7 0 96 28.7 96 64l0 288c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L160 0zM280 72l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM224 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 376c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-256z" />
    </Icon>
);

export default Browsers;