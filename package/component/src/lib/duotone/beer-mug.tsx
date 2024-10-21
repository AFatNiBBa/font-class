
import { Icon, generic } from "../../index";

/**
 * A component that renders the `beer-mug` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/beer-mug?s=duotone beer-mug}
 * @preview ![beer-mug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/beer-mug.svg)
 */
const BeerMug: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 163.2C46.1 171.3 62.5 176 80 176c18.7 0 36.2-5.4 51-14.7c20 19 47.2 30.7 77 30.7s57-11.7 77-30.7c14.8 9.3 32.3 14.7 51 14.7c19.6 0 37.9-5.9 53.1-16l46.1 0c42.4 0 76.8 34.4 76.8 76.8l0 102.1c0 30.3-17.9 57.9-45.6 70.2L384 445.7l0 2.3c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-284.8zM128 240l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160c0-8.8-7.2-16-16-16s-16 7.2-16 16zm64 0l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160c0-8.8-7.2-16-16-16s-16 7.2-16 16zm64 0l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160c0-8.8-7.2-16-16-16s-16 7.2-16 16zm128-16l0 151.6 56.4-25.1c4.6-2.1 7.6-6.6 7.6-11.7l0-102.1c0-7.1-5.7-12.8-12.8-12.8L384 224z" />
        <path d="M267.7 133.3c6.9-7.7 21.4-8.6 29.6-2.3c10.8 8.2 24.2 13 38.7 13c35.3 0 64-28.7 64-64s-28.7-64-64-64c-14.6 0-28 4.9-38.7 13c-8.2 6.3-22.7 5.4-29.6-2.3C253 10.3 231.7 0 208 0s-45 10.3-59.7 26.7c-6.9 7.7-21.4 8.6-29.6 2.3C108 20.9 94.6 16 80 16C44.7 16 16 44.7 16 80s28.7 64 64 64c14.6 0 28-4.9 38.7-13c8.2-6.3 22.7-5.4 29.6 2.3C163 149.7 184.3 160 208 160s45-10.3 59.7-26.7zM160 240c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160z" />
    </Icon>
);

export default BeerMug;