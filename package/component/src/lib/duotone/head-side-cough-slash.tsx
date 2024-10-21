
import { Icon, generic } from "../../index";

/**
 * A component that renders the `head-side-cough-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-cough-slash?s=duotone head-side-cough-slash}
 * @preview ![head-side-cough-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/head-side-cough-slash.svg)
 */
const HeadSideCoughSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224.2c0-38.7 9.8-75.1 27.1-106.9L341.8 365.3l-2.5 .3c-11 1.4-19.2 10.7-19.2 21.8c0 11.6 9 21.2 20.6 21.9l62 3.9 43 33.9C439.3 466.2 421.2 480 400 480l-80 0 0 8c0 13.3-10.7 24-24 24c-13.3 0-26.7 0-40 0L96 512c-17.7 0-32-14.3-32-32l0-72.7c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM89.6 44.9C127 16.7 173.5 0 224 0l24 0c95.2 0 181.2 69.3 197.3 160.2c2.3 13 6.8 25.7 15.1 36l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8c-6.7 0-13.4 0-20.2 0l0 5.8C328.5 232.2 209 138.5 89.6 44.9zM576 336a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm64-48a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default HeadSideCoughSlash;