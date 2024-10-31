
import { Icon, generic } from "../../index";

/**
 * A component that renders the `maximize` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/maximize?s=duotone maximize}
 * @preview ![maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/maximize.svg)
 */
const Maximize: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 56l0 144c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79c21.3-21.3 42.7-42.7 64-64l-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32L56 32C42.7 32 32 42.7 32 56zM256 320l79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l144 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79-64 64z" />
        <path d="M480 56l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-40-40L177 399l40 40c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L56 480c-13.3 0-24-10.7-24-24l0-144c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l40 40L335 113 295 73c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8l144 0c13.3 0 24 10.7 24 24z" />
    </Icon>
);

export default Maximize;