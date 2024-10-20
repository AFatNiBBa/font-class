
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-from-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-from-line?s=duotone right-from-line}
 * @preview ![right-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/right-from-line.svg)
 */
const RightFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32L64 96c0-17.7-14.3-32-32-32S0 78.3 0 96z" />
        <path d="M436.7 228.7L313.9 105.9c-6.4-6.4-15-9.9-24-9.9c-18.7 0-33.9 15.2-33.9 33.9l0 62.1-128 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0 0 62.1c0 18.7 15.2 33.9 33.9 33.9c9 0 17.6-3.6 24-9.9L436.7 283.3c7.2-7.2 11.3-17.1 11.3-27.3s-4.1-20.1-11.3-27.3z" />
    </Icon>
);

export default RightFromLine;