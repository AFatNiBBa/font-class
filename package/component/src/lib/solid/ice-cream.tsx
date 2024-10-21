
import { Icon } from "../../index";

/**
 * A component that renders the `ice-cream` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-cream?s=solid ice-cream}
 * @preview ![ice-cream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/ice-cream.svg)
 */
const IceCream: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M367.1 160c.6-5.3 .9-10.6 .9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4 .3 10.7 .9 16l-.9 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l53.5 0 181 0 53.5 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-.9 0zM96 288L200.8 497.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L352 288 96 288z" />
    </Icon>
);

export default IceCream;