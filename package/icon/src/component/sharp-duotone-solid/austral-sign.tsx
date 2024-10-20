
import { Icon, generic } from "../../index";

/**
 * A component that renders the `austral-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/austral-sign?s=sharp-duotone-solid austral-sign}
 * @preview ![austral-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/austral-sign.svg)
 */
const AustralSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224l32 0 85.5 0c-8.5 21.3-17.1 42.7-25.6 64L32 288 0 288l0-64zm0 96l32 0 47.1 0L53.5 384 32 384 0 384l0-64zm122.5 64l25.6-64 151.9 0c8.5 21.3 17.1 42.7 25.6 64l-203.1 0zm38.4-96l25.6-64 75.1 0c8.5 21.3 17.1 42.7 25.6 64l-126.3 0zm169.6-64l85.5 0 32 0 0 64-32 0-59.9 0c-8.5-21.3-17.1-42.7-25.6-64zm38.4 96l47.1 0 32 0 0 64-32 0-21.5 0c-8.5-21.3-17.1-42.7-25.6-64z" />
        <path d="M216 32l-21.7 0-8 20.1-160 400L15.1 480l68.9 0 1.6-4.1L224 130.2 362.3 475.9l1.6 4.1 68.9 0-11.2-27.9-160-400-8-20.1L232 32l-16 0z" />
    </Icon>
);

export default AustralSign;