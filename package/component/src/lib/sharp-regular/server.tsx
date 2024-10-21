
import { Icon } from "../../index";

/**
 * A component that renders the `server` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/server?s=sharp-regular server}
 * @preview ![server](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/server.svg)
 */
const Server: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 80l0 96 416 0 0-96L48 80zM0 32l48 0 416 0 48 0 0 48 0 96 0 48-48 0L48 224 0 224l0-48L0 80 0 32zM48 336l0 96 416 0 0-96L48 336zM0 288l48 0 416 0 48 0 0 48 0 96 0 48-48 0L48 480 0 480l0-48 0-96 0-48zm392 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24-280a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM328 384a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24-280a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Server;