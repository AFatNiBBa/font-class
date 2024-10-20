
import { Icon } from "../../index";

/**
 * A component that renders the `server` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/server?s=sharp-solid server}
 * @preview ![server](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/server.svg)
 */
const Server: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32L0 32 0 224l512 0 0-192zM344 104a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM512 288L0 288 0 480l512 0 0-192zM344 360a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Server;