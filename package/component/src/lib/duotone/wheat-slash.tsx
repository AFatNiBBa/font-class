
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wheat-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wheat-slash?s=duotone wheat-slash}
 * @preview ![wheat-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wheat-slash.svg)
 */
const WheatSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 480c0-8.2 3.1-16.4 9.4-22.6l68.9-68.9L131.9 378c-37.5-37.5-37.5-98.3 0-135.8L143.2 231c6.2-6.2 16.4-6.2 22.6 0l11.3 11.3c21 21 33.2 47.5 36.5 74.8l29.5-29.5 50.6 39.9-36.3 36.3c28.5 2.8 56.2 15.1 78.1 36.9L346.8 412c6.2 6.2 6.2 16.4 0 22.6l-11.3 11.3c-37.5 37.5-98.3 37.5-135.8 0l-12.2-12.2-68.9 68.9c-6.2 6.2-14.4 9.4-22.6 9.4s-16.4-3.1-22.6-9.4S64 488.2 64 480zM224.7 150.8c2.7-3.6 5.7-7.1 9-10.4L245 129.1c6.2-6.2 16.4-6.2 22.6 0L279 140.5c21 21 33.2 47.5 36.5 74.8l30.5-30.5-10.4-10.4c-37.5-37.5-37.5-98.3 0-135.8l11.3-11.3c6.2-6.2 16.4-6.2 22.6 0l11.3 11.3c34.1 34.1 44.9 82.6 32.5 125.9c43.3-12.4 91.8-1.5 125.9 32.5l11.3 11.3c6.2 6.2 6.2 16.4 0 22.6l-11.3 11.3c-37.5 37.5-98.3 37.5-135.8 0l-12.2-12.2-28.7 28.7c-45.9-36-91.8-72-137.8-108zM448 88c0-48.6 39.4-88 88-88l24 0c8.8 0 16 7.2 16 16l0 24c0 48.6-39.4 88-88 88l-24 0c-8.8 0-16-7.2-16-16l0-24z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default WheatSlash;