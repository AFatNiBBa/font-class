
import { Icon, generic } from "../../index";

/**
 * A component that renders the `route-interstate` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/route-interstate?s=sharp-duotone-solid route-interstate}
 * @preview ![route-interstate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/route-interstate.svg)
 */
const RouteInterstate: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M21.2 192l469.1 0c-.3 51.6-8.2 97.4-26.8 138.7c-33 73-96.8 125.4-194.1 170.4l-12.7 5.9-12.9-5.4c-100.1-41.4-164.4-94-196.9-168.5c-18.2-41.6-25.6-88-25.6-139.8c0-.4 0-.8 0-1.3z" />
        <path d="M256 2.3l17 10.6c29.7 18.6 53.7 28.5 78.3 32.6c24.8 4.1 52.6 2.8 90.5-4.8l32.8-6.6 5.1 33.1c6.9 44.7 10.9 86.3 10.7 124.9L21.2 192c.2-38.9 4.3-80.5 11.1-124.9l5.1-33.1 32.8 6.6c37.9 7.6 65.7 8.9 90.5 4.8c24.6-4.1 48.6-14 78.3-32.6L256 2.3z" />
    </Icon>
);

export default RouteInterstate;