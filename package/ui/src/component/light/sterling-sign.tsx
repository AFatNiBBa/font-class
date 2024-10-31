
import { Icon } from "../../index";

/**
 * A component that renders the `sterling-sign` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sterling-sign?s=light sterling-sign}
 * @preview ![sterling-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sterling-sign.svg)
 */
const SterlingSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M80 152c0-48.6 39.4-88 88-88l7.1 0c9.5 0 18.9 1.5 27.8 4.5l80 26.7c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-80-26.7c-12.2-4.1-25-6.2-37.9-6.2L168 32C101.7 32 48 85.7 48 152l0 104-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l31.9 0C46.3 346.2 31 403.1 3.1 454.3l-1.1 2c-2.7 5-2.6 11 .3 15.8S10.4 480 16 480l288 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L42.1 448c23.5-50.1 36.4-104.6 37.8-160L240 288c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 256l0-104z" />
    </Icon>
);

export default SterlingSign;