
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ankh` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ankh?s=sharp-duotone-solid ankh}
 * @preview ![ankh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ankh.svg)
 */
const Ankh: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M128 320l19.4 0c7.8 5.3 12.6 8 12.6 8s4.8-2.7 12.6-8l19.4 0 0 192-64 0 0-192z" />
        <path d="M96 128c0-35.3 28.7-64 64-64s64 28.7 64 64c0 41.6-20.7 76.6-46.6 104.1c-5.9 6.2-11.8 11.8-17.4 16.7c-5.6-4.9-11.5-10.5-17.4-16.7C116.7 204.6 96 169.6 96 128zM160 0C89.3 0 32 57.3 32 128c0 52.4 21.5 95.5 46.8 128L32 256 0 256l0 64 32 0 115.4 0c7.8 5.3 12.6 8 12.6 8s4.8-2.7 12.6-8L288 320l32 0 0-64-32 0-46.8 0c25.4-32.5 46.8-75.6 46.8-128C288 57.3 230.7 0 160 0z" />
    </Icon>
);

export default Ankh;