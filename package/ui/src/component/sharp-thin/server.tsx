
import { Icon } from "../../index";

/**
 * A component that renders the `server` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/server?s=sharp-thin server}
 * @preview ![server](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/server.svg)
 */
const Server: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l0 160 480 0 0-160L16 48zM0 32l16 0 480 0 16 0 0 16 0 160 0 16-16 0L16 224 0 224l0-16L0 48 0 32zM16 304l0 160 480 0 0-160L16 304zM0 288l16 0 480 0 16 0 0 16 0 160 0 16-16 0L16 480 0 480l0-16L0 304l0-16zm336 96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16-272a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 272a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16-272a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Server;