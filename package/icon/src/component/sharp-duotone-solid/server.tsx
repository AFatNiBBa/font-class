
import { Icon, generic } from "../../index";

/**
 * A component that renders the `server` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/server?s=sharp-duotone-solid server}
 * @preview ![server](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/server.svg)
 */
const Server: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 480l512 0 0-192L0 288zm368 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm24-256a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm56 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M512 32L0 32 0 224l512 0 0-192zM344 104a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm32 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Server;