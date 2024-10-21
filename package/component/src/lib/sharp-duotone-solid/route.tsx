
import { Icon, generic } from "../../index";

/**
 * A component that renders the `route` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/route?s=sharp-duotone-solid route}
 * @preview ![route](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/route.svg)
 */
const Route: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 512l384 0 32 0 0-32 0-128 0-32-32 0-192 0 0-64 128 0s-1.8-1.8-4.8-4.9s-7.4-7.8-12.5-13.6C388.5 226 375 210 362.1 192L256 192l-32 0 0 32 0 128 0 32 32 0 192 0 0 64-298.1 0C124.1 483.9 96 512 96 512z" />
        <path d="M512 96c0 64-96 160-96 160s-96-96-96-160c0-53 43-96 96-96s96 43 96 96zm-64 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM192 352c0 64-96 160-96 160s-96-96-96-160c0-53 43-96 96-96s96 43 96 96zm-64 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Route;