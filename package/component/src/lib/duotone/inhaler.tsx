
import { Icon, generic } from "../../index";

/**
 * A component that renders the `inhaler` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inhaler?s=duotone inhaler}
 * @preview ![inhaler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/inhaler.svg)
 */
const Inhaler: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256a32 32 0 1 0 64 0A32 32 0 1 0 0 256zm0 96a32 32 0 1 0 64 0A32 32 0 1 0 0 352zm0 96a32 32 0 1 0 64 0A32 32 0 1 0 0 448zM96 304a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM376.6 139.6c2.6 .7 5 2.1 7.1 4.2L523.5 283.5 575.2 94.3c1.7-6.2 .8-12.9-2.4-18.4s-8.6-9.6-14.9-11.2l-128-32c-12.7-3.2-25.6 4.4-29 17l-24.2 89.9z" />
        <path d="M534.1 305.5c1.5-5.5-.1-11.5-4.1-15.5L383.8 143.8c-8.7-8.7-23.6-4.7-26.8 7.2l-16.5 61.2c-1.9 7-8.2 11.8-15.4 11.8L232 224c-22.1 0-40 17.9-40 40l0 176c0 22.1 17.9 40 40 40l224 0c18 0 33.8-12.1 38.6-29.5l39.5-145z" />
    </Icon>
);

export default Inhaler;