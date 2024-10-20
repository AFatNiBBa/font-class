
import { Icon } from "../../index";

/**
 * A component that renders the `server` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/server?s=thin server}
 * @preview ![server](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/server.svg)
 */
const Server: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 64c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 224c-35.3 0-64-28.7-64-64L0 96zM64 304c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48L64 304zM0 352c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-64zm336 32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16-272a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 272a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16-272a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Server;