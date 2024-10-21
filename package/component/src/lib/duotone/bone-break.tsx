
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bone-break` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bone-break?s=duotone bone-break}
 * @preview ![bone-break](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bone-break.svg)
 */
const BoneBreak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 272c0 35.8 23.5 66.1 55.9 76.3c4.6 1.5 8.3 5.1 9.3 9.8s-1.1 9.5-4.8 12.6C43.1 385.5 32 407.5 32 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-11.9 7-23.8 18.6-26.1L320 384 294.3 255.4c-3.5-17.3-20.3-28.6-37.7-25.1L186 244.4c-16.4 3.3-32.1-7.2-42.1-20.5C129.3 204.5 106.1 192 80 192c-44.2 0-80 35.8-80 80zM320 384l109.4 21.9C441 408.2 448 420.1 448 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-24.5-11.1-46.5-28.5-61.2c-3.7-3.1-5.7-7.9-4.8-12.6s4.7-8.4 9.3-9.8C616.5 338.1 640 307.8 640 272c0-44.2-35.8-80-80-80c-26.1 0-49.3 12.5-63.9 31.8c-10.1 13.3-25.7 23.8-42.1 20.5l-70.6-14.1c-17.3-3.5-34.2 7.8-37.7 25.1L320 384z" />
        <path d="M320 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24zM167 71c9.4-9.4 24.6-9.4 33.9 0l48 48c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9zM473 71c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0z" />
    </Icon>
);

export default BoneBreak;