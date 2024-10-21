
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-and-crescent` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-and-crescent?s=duotone star-and-crescent}
 * @preview ![star-and-crescent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/star-and-crescent.svg)
 */
const StarAndCrescent: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M258.1 226.3c0 2.4 .9 4.9 2.9 6.8l50.9 49.6c2.3 2.2 3.3 5.4 2.8 8.5l-12 70.1c-1.1 6.2 3.9 11.2 9.5 11.2c1.5 0 3-.4 4.5-1.1l63-33.1c2.8-1.5 6.1-1.5 8.9 0l63 33.1c1.5 .8 3 1.1 4.5 1.1c5.6 0 10.5-5 9.5-11.2l-12-70.1c-.5-3.1 .5-6.3 2.8-8.5L507 233.1c2-1.9 2.9-4.4 2.9-6.8c0-4.5-3.1-8.8-8.2-9.6l-70.4-10.2c-3.1-.5-5.8-2.4-7.2-5.3l-31.5-63.8c-1.8-3.6-5.2-5.4-8.6-5.4s-6.8 1.8-8.6 5.4l-31.5 63.8c-1.4 2.8-4.1 4.8-7.2 5.3l-70.4 10.2c-5.1 .7-8.2 5.1-8.2 9.6z" />
        <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c33 0 64.6-6.3 93.6-17.7c7.4-2.9 11.5-10.7 9.8-18.4s-8.8-13-16.7-12.4c-4.8 .3-9.7 .5-14.6 .5c-114.9 0-208-93.1-208-208s93.1-208 208-208c4.9 0 9.8 .2 14.6 .5c7.9 .5 15-4.7 16.7-12.4s-2.4-15.5-9.8-18.4C320.6 6.3 289 0 256 0z" />
    </Icon>
);

export default StarAndCrescent;