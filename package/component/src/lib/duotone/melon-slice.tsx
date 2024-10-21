
import { Icon, generic } from "../../index";

/**
 * A component that renders the `melon-slice` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/melon-slice?s=duotone melon-slice}
 * @preview ![melon-slice](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/melon-slice.svg)
 */
const MelonSlice: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16.6 385.2c8.3-2.7 17.8-.8 24.4 5.9c96.9 96.9 253.6 97.1 350.4 .3s96.6-253.5-.3-350.4c-.8-.9-1.6-1.7-2.3-2.6s-1.3-1.8-1.8-2.8c-1.1-1.9-1.8-4-2.3-6.1c-1-4.3-.8-8.7 .6-12.9c-.7 .5-1.3 1-1.9 1.6L321.6 79.9c-3.9 3.9-5.4 9.4-4.5 14.8c1.9 10.8 2.9 22 2.9 33.3c0 106-86 192-192 192c-11.4 0-22.5-1-33.3-2.9c-5.4-.9-11 .6-14.8 4.5L18.2 383.3c-.6 .6-1.1 1.2-1.6 1.9z" />
        <path d="M7 391c9.4-9.4 24.6-9.4 33.9 0c96.9 96.9 253.6 97.1 350.4 .3s96.6-253.5-.3-350.4c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0c115.6 115.6 116 302.6 .3 418.3S122.6 540.5 7 425c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default MelonSlice;