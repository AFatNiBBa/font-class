
import { Icon, generic } from "../../index";

/**
 * A component that renders the `route` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/route?s=duotone route}
 * @preview ![route](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/route.svg)
 */
const Route: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 512l320 0c53 0 96-43 96-96s-43-96-96-96l-96 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c-5.1 0-9.9-2.1-13.3-6c-1.1-1.3-2.3-2.7-3.7-4.3s-2.9-3.4-4.5-5.3c-3.2-3.9-6.8-8.4-10.7-13.4c-7.8-10-16.6-22-25.2-35c-12.9 0-25.7 0-38.6 0c-53 0-96 43-96 96s43 96 96 96l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-262.6 0c-17.1 26-35.4 48-44.1 58c-3.3 3.9-8.2 6-13.3 6z" />
        <path d="M320 96c0 54.5 63.8 132.1 82.7 154c3.3 3.9 8.2 6 13.3 6s9.9-2.1 13.3-6c19-21.9 82.7-99.6 82.7-154c0-53-43-96-96-96s-96 43-96 96zm64 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM0 352c0 54.5 63.8 132.1 82.7 154c3.3 3.9 8.2 6 13.3 6s9.9-2.1 13.3-6c19-21.9 82.7-99.6 82.7-154c0-53-43-96-96-96s-96 43-96 96zm64 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Route;