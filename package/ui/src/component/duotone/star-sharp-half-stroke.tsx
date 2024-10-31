
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-sharp-half-stroke` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp-half-stroke?s=duotone star-sharp-half-stroke}
 * @preview ![star-sharp-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/star-sharp-half-stroke.svg)
 */
const StarSharpHalfStroke: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 0c0 43.2 0 86.4 0 129.5c6.7 21.1 13.5 42.3 20.2 63.4l12.4 39 41 0 65.2 0-57.2 44.5-30.8 24 11.8 37.2 19.7 61.8-47.9-37.2L288 335.5c0 23.6 0 47.3 0 70.9c37.4 29.1 74.8 58.2 112.2 87.3l.3 .3 3.7 2.9 13 10.1c4.3 3.4 9.5 5.1 14.7 5.1c4.8 0 9.6-1.4 13.7-4.3c8.6-6 12.3-16.9 9.1-27l-5-15.7-1.4-4.5-.1-.4L403.9 320.7l114-88.7c.7-.6 1.4-1.1 2.1-1.6l14.7-11.5c8.1-6.3 11.3-17 8-26.7s-12.4-16.2-22.7-16.2l-18.7 0-2.5 0-137.3 0L317.4 37.2c-.5-1.6-.9-3-1.4-4.3l-5.2-16.2C307.7 6.8 298.5 0 288 0z" />
        <path d="M254.4 50.4L214.5 176 90.3 176 88 176l-13.3 0L56 176c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7L56 230.4l10.5 8.2 1.8 1.4 103.7 80.7L132 446.7l-1.1 3.5L126.1 465l-5 15.7c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7l13-10.1 12.3-9.5 2.9-2.3L288 406.4l0-81.1 0-169.4L288 0c-10.5 0-19.7 6.8-22.9 16.7L260 32.9s0 0 0 0l-4.6 14.3-1 3.2z" />
    </Icon>
);

export default StarSharpHalfStroke;