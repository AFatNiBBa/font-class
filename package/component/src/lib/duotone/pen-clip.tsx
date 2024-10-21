
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-clip` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-clip?s=duotone pen-clip}
 * @preview ![pen-clip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pen-clip.svg)
 */
const PenClip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M288 94.1c5.7 5.7 11.3 11.3 17 17c32 32 64 64 96 96c5.3 5.3 10.7 10.7 16 16l1 1c24.9-24.9 49.8-49.8 74.7-74.7c12.5-12.5 18.7-28.9 18.7-45.3s-6.2-32.8-18.7-45.3L453.3 19.3C440.8 6.8 424.4 .6 408 .6s-32.8 6.2-45.3 18.7L288 94.1z" />
        <path d="M207 114.9c9.4-9.4 24.6-9.4 33.9 0L254.1 128 99.5 282.5c-48 48-80.8 109.2-94.1 175.8l-5 25c-1.6 7.9 .9 16 6.6 21.7s13.8 8.1 21.7 6.6l25-5c66.6-13.3 127.8-46.1 175.8-94.1L401 241l17-17-1-1-16-16-96-96-17-17L274.9 81c-28.1-28.1-73.7-28.1-101.8 0L71 183c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L207 114.9z" />
    </Icon>
);

export default PenClip;