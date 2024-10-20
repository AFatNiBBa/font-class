
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ice-cream` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-cream?s=duotone ice-cream}
 * @preview ![ice-cream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ice-cream.svg)
 */
const IceCream: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 208c0 26.5 21.5 48 48 48l53.5 0 181 0 53.5 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-.9 0c.6-5.3 .9-10.6 .9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4 .3 10.7 .9 16l-.9 0c-26.5 0-48 21.5-48 48z" />
        <path d="M199.8 495.6L80 256H372.6L252.7 495.6c-5 10-15.3 16.4-26.5 16.4s-21.5-6.3-26.5-16.4z" />
    </Icon>
);

export default IceCream;