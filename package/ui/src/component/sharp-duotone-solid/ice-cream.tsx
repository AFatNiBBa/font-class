
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ice-cream` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-cream?s=sharp-duotone-solid ice-cream}
 * @preview ![ice-cream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ice-cream.svg)
 */
const IceCream: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 208l0 48 48 0 53.5 0 181 0 53.5 0 48 0 0-48c0-26.5-21.5-48-48-48l-.9 0c.6-5.3 .9-10.6 .9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4 .3 10.7 .9 16l-.9 0c-26.5 0-48 21.5-48 48z" />
        <path d="M224 512L80 256H368L224 512z" />
    </Icon>
);

export default IceCream;