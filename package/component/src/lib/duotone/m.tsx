
import { Icon, generic } from "../../index";

/**
 * A component that renders the `m` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/m?s=duotone m}
 * @preview ![m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/m.svg)
 */
const M: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M22.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9L224 294.3 389.4 46.3c7.8-11.7 22.4-17 35.9-12.9S448 49.9 448 64l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-278.3L250.6 369.8c-5.9 8.9-15.9 14.2-26.6 14.2s-20.7-5.3-26.6-14.2L64 169.7 64 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 49.9 9.2 37.5 22.7 33.4z" />
    </Icon>
);

export default M;