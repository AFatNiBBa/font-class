
import { Icon } from "../../index";

/**
 * A component that renders the `server` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/server?s=sharp-light server}
 * @preview ![server](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/server.svg)
 */
const Server: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64l0 128 448 0 0-128L32 64zM0 32l32 0 448 0 32 0 0 32 0 128 0 32-32 0L32 224 0 224l0-32L0 64 0 32zM32 320l0 128 448 0 0-128L32 320zM0 288l32 0 448 0 32 0 0 32 0 128 0 32-32 0L32 480 0 480l0-32L0 320l0-32zm304 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24-280a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 280a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24-280a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Server;