
import { Icon, generic } from "../../index";

/**
 * A component that renders the `naira-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/naira-sign?s=sharp-duotone-solid naira-sign}
 * @preview ![naira-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/naira-sign.svg)
 */
const NairaSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 256l0 64 32 0 32 0 0-64-32 0L0 256zm128 0l0 64 98.9 0c-13.6-21.3-27.3-42.7-40.9-64l-58 0zm134 0l40.9 64 17.1 0 0-64-58 0zm122 0l0 64 32 0 32 0 0-64-32 0-32 0z" />
        <path d="M64 32l32 0 5.3 0 17.5 0 9.4 14.8L320 346.8 320 64l0-32 64 0 0 32 0 384 0 32-32 0-5.3 0-17.5 0-9.4-14.8L128 165.2 128 448l0 32-64 0 0-32L64 64l0-32z" />
    </Icon>
);

export default NairaSign;