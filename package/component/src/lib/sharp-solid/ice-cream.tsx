
import { Icon } from "../../index";

/**
 * A component that renders the `ice-cream` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-cream?s=sharp-solid ice-cream}
 * @preview ![ice-cream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ice-cream.svg)
 */
const IceCream: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M367.1 160c.6-5.3 .9-10.6 .9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4 .3 10.7 .9 16l-.9 0c-26.5 0-48 21.5-48 48l0 48 101.5 0 181 0L416 256l0-48c0-26.5-21.5-48-48-48l-.9 0zM96 288L224 512 352 288 96 288z" />
    </Icon>
);

export default IceCream;