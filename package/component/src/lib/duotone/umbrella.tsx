
import { Icon, generic } from "../../index";

/**
 * A component that renders the `umbrella` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella?s=duotone umbrella}
 * @preview ![umbrella](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/umbrella.svg)
 */
const Umbrella: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M163.4 462.3l2.3 4.7c13.8 27.6 42 45 72.8 45c45 0 81.4-36.5 81.4-81.4l0-151.9c-9.8-4.3-20.6-6.7-32-6.7c-1.4 0-2.8 0-4.2 .1s-2.8 .2-4.2 .3c-2.8 .3-5.5 .7-8.2 1.3c-5.4 1.1-10.5 2.8-15.4 4.9l0 151.9c0 9.6-7.8 17.4-17.4 17.4c-6.6 0-12.6-3.7-15.6-9.6l-2.3-4.7c-7.9-15.8-27.1-22.2-42.9-14.3s-22.2 27.1-14.3 42.9z" />
        <path d="M320 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 17.7C124.2 63.4 18.3 161 2.1 285.9c-2 15.6 17.3 24.4 27.8 12.7C43.9 283 71.2 272 96 272c38.7 0 71 27.5 78.4 64.1c1.7 8.7 8.7 15.9 17.6 15.9s15.8-7.2 17.6-15.9C217 299.5 249.3 272 288 272s71 27.5 78.4 64.1c1.7 8.7 8.7 15.9 17.6 15.9s15.8-7.2 17.6-15.9C409 299.5 441.3 272 480 272c24.8 0 52.1 11 66.1 26.7c10.5 11.7 29.8 2.9 27.8-12.7C557.7 161 451.8 63.4 320 49.7L320 32z" />
    </Icon>
);

export default Umbrella;