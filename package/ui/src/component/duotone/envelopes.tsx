
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelopes` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelopes?s=duotone envelopes}
 * @preview ![envelopes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/envelopes.svg)
 */
const Envelopes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 126c67.2 49.8 134.4 99.6 201.6 149.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7C441.6 225.6 508.8 175.8 576 126l0 194c0 35.3-28.7 64-64 64l-352 0c-35.3 0-64-28.7-64-64l0-194zm.7-39.3C101.2 55.7 127.8 32 160 32l352 0c32.2 0 58.8 23.7 63.3 54.7c-73.3 54.3-146.6 108.6-220 163c-5.6 4.1-12.4 6.4-19.3 6.4s-13.7-2.2-19.3-6.4C243.3 195.3 170 141 96.7 86.7z" />
        <path d="M96 96l0 30L297.6 275.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L576 126l0-30c0-3.2-.2-6.3-.7-9.3l-220 163c-5.6 4.1-12.4 6.4-19.3 6.4s-13.7-2.2-19.3-6.4l-220-163c-.4 3-.7 6.2-.7 9.3zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z" />
    </Icon>
);

export default Envelopes;