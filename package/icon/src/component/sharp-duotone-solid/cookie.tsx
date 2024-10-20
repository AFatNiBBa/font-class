
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cookie` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cookie?s=sharp-duotone-solid cookie}
 * @preview ![cookie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cookie.svg)
 */
const Cookie: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 222.1L42 370.4 149.8 475l148.3 21 132.3-70.7L496 289.9 470 141.6 362.2 37 213.9 16 81.7 86.7 16 222.1zM144 336l32-32 32 32-32 32-32-32zm32-160l32-32 32 32-32 32-32-32zM336 304l32-32 32 32-32 32-32-32z" />
        <path d="M176 176l32 32 32-32-32-32-32 32zM144 336l32 32 32-32-32-32-32 32zm224 0l32-32-32-32-32 32 32 32z" />
    </Icon>
);

export default Cookie;