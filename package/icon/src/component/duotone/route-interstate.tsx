
import { Icon, generic } from "../../index";

/**
 * A component that renders the `route-interstate` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/route-interstate?s=duotone route-interstate}
 * @preview ![route-interstate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/route-interstate.svg)
 */
const RouteInterstate: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M21.2 192l469 0c-.8 51.2-9 97.7-27.2 139.8c-32.5 75.1-94.6 130.9-190.3 175.7c-10.2 4.8-22.1 5-32.5 .6c-98.4-41.4-161-97.6-193-173.9C29.3 291.5 21.7 244 21.2 192z" />
        <path d="M235.1 7.3c12.8-7.8 29-7.8 41.8 0c27.5 16.8 50.2 26 73.4 30c23.3 4 49.2 3.2 83.7-3.2c22.1-4.1 43.6 11 46.9 33.6c6.5 44.2 10 85.6 9.4 124.3l-469 0c-.3-38.9 3.4-80.4 9.8-124.3C34.4 45 55.9 30 78 34.1c34.4 6.3 60.3 7.2 83.7 3.2c23.2-4 45.9-13.2 73.4-30z" />
    </Icon>
);

export default RouteInterstate;