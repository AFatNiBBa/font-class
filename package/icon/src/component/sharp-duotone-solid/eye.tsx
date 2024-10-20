
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eye` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye?s=sharp-duotone-solid eye}
 * @preview ![eye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/eye.svg)
 */
const Eye: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256C30 181.3 129.6 32 288 32s258 149.3 288 224c-30 74.7-129.6 224-288 224S30 330.7 0 256zm144 0a144 144 0 1 0 288 0 144 144 0 1 0 -288 0z" />
        <path d="M193.8 237.2c-1.2 6.1-1.8 12.4-1.8 18.8c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-6.4 0-12.7 .6-18.8 1.8L288 256l-94.2-18.8z" />
    </Icon>
);

export default Eye;