
import { Icon } from "../../index";

/**
 * A component that renders the `server` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/server?s=light server}
 * @preview ![server](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/server.svg)
 */
const Server: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 64c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 224c-35.3 0-64-28.7-64-64L0 96zM64 320c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L64 320zM0 352c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64zm304 32a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24-280a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 280a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24-280a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Server;