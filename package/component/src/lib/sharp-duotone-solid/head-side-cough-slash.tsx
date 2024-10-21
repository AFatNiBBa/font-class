
import { Icon, generic } from "../../index";

/**
 * A component that renders the `head-side-cough-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-cough-slash?s=sharp-duotone-solid head-side-cough-slash}
 * @preview ![head-side-cough-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/head-side-cough-slash.svg)
 */
const HeadSideCoughSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224.3c0-38.7 9.8-75.2 27.1-107L341.8 365.3 320 368l0 40 82.5 5.2L448 449l0 31-128 0 0 32-32 0-32 0L96 512l-32 0 0-32 0-98.8C23 339.3 0 283 0 224.3zM88.4 45.9C126.1 17.1 173.2 0 224.3 0L256 0C358.1 0 441.6 79.7 447.7 180.3L505 252l7 8.8 0 11.2 0 16 0 32-32 0-32 0 0 5L88.4 45.9zM576 336a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm64-48a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L18.9 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default HeadSideCoughSlash;