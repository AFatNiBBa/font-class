
import { Icon } from "../../index";

/**
 * A component that renders the `burst` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burst?s=sharp-thin burst}
 * @preview ![burst](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/burst.svg)
 */
const Burst: typeof Icon = x => (
    <Icon {...x}>
        <path d="M312.8 118.8l-48-100.3L256 0l-8.9 18.5-41 85.8-6.9 14.5-13.8-8.2L28.9 17.3 0 0 17.3 28.9l93.3 156.5 8.2 13.8-14.5 6.9-85.8 41L0 256l18.5 8.9 100.3 48-37 104.8L75 437l19.4-6.8 104.8-37 48 100.3L256 512l8.9-18.5 48-100.3 104.8 37L437 437l-6.8-19.4-37-104.8 100.3-48L512 256l-18.5-8.9-100.3-48 37-104.8L437 75l-19.4 6.8-104.8 37zm98-17.6l-32.7 92.6-4.8 13.6 13 6.2L474.9 256l-88.6 42.4-13 6.2 4.8 13.6 32.7 92.6-92.6-32.7-13.6-4.8-6.2 13L256 474.9l-42.4-88.6-6.2-13-13.6 4.8-92.6 32.7 32.7-92.6 4.8-13.6-13-6.2L37.1 256l88.6-42.4 15.8-7.6-9-15.1L46.2 46.2 191 132.6l15.1 9 7.6-15.8L256 37.1l42.4 88.6 6.2 13 13.6-4.8 92.6-32.7z" />
    </Icon>
);

export default Burst;