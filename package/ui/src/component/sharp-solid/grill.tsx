
import { Icon } from "../../index";

/**
 * A component that renders the `grill` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grill?s=sharp-solid grill}
 * @preview ![grill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/grill.svg)
 */
const Grill: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l448 0 0 64c0 89.8-52.9 167.3-129.2 203l55.2 128.9 4 9.3 9.5 22.1-44.1 18.9-9.5-22.1-4-9.3L316.7 416 160 416c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64c3.4 0 6.8 .3 10.1 .8L129.2 299C52.9 263.3 0 185.8 0 96L0 32zM151.8 368l144.3 0-22.9-53.4c-15.9 3.6-32.3 5.4-49.3 5.4s-33.4-1.9-49.3-5.4L151.8 368zM96 440a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Grill;