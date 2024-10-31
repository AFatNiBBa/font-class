
import { Icon, generic } from "../../index";

/**
 * A component that renders the `naira-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/naira-sign?s=duotone naira-sign}
 * @preview ![naira-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/naira-sign.svg)
 */
const NairaSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 288c0 17.7 14.3 32 32 32l32 0 0-64-32 0c-17.7 0-32 14.3-32 32zm128-32l0 64 100.2 0c-14.2-21.3-28.4-42.7-42.7-64L128 256zm134.5 0l42.7 64 14.9 0 0-64-57.5 0zM384 256l0 64 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0z" />
        <path d="M86.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9L320 342.3 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 14.1-9.2 26.5-22.7 30.6s-28.1-1.1-35.9-12.9L128 169.7 128 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L64 64c0-14.1 9.2-26.5 22.7-30.6z" />
    </Icon>
);

export default NairaSign;