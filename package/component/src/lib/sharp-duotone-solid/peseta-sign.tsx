
import { Icon, generic } from "../../index";

/**
 * A component that renders the `peseta-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/peseta-sign?s=sharp-duotone-solid peseta-sign}
 * @preview ![peseta-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/peseta-sign.svg)
 */
const PesetaSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 160l0 64 32 0 0-64L0 160zm96 0l0 64 186.5 0c3.5-10 5.5-20.8 5.5-32s-1.9-22-5.5-32L96 160zm252.8 0c2.1 10.3 3.2 21 3.2 32c0 1.4 0 2.7-.1 4.1s-.1 2.7-.2 4.1c-.1 2.7-.3 5.4-.6 8.1c-.5 5.3-1.3 10.6-2.4 15.8l35.2 0 0-64-35.2 0z" />
        <path d="M32 32l32 0 128 0c88.4 0 160 71.6 160 160s-71.6 160-160 160l-96 0 0 128-64 0 0-160L32 64l0-32zM96 288l96 0c53 0 96-43 96-96s-43-96-96-96L96 96l0 192z" />
    </Icon>
);

export default PesetaSign;