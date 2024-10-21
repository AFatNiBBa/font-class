
import { Icon, generic } from "../../index";

/**
 * A component that renders the `landmark-magnifying-glass` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-magnifying-glass?s=sharp-duotone-solid landmark-magnifying-glass}
 * @preview ![landmark-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/landmark-magnifying-glass.svg)
 */
const LandmarkMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 144l0 48 301.3 0c-8.6-19.6-13.3-41.2-13.3-64c0-34.8 11.1-66.9 29.9-93.2L256 0 0 144zM0 464l0 48 512 0 0-48-64-48 0-128c-22.8 0-44.4-4.8-64-13.3L384 416l-40 0 0-166.4c-8.9-7.6-17-16.2-24-25.6l-40 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192-64 0 0 192L0 464z" />
        <path d="M528 128.2a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM520 234c-20.5 14-45.3 22.1-72 22.1c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9l63 62.6 17 16.9-33.8 34-17-16.9L520 234z" />
    </Icon>
);

export default LandmarkMagnifyingGlass;