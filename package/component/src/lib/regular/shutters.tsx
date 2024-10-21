
import { Icon } from "../../index";

/**
 * A component that renders the `shutters` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shutters?s=regular shutters}
 * @preview ![shutters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/shutters.svg)
 */
const Shutters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 32C10.7 32 0 42.7 0 56S10.7 80 24 80l464 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 32zM13.7 128L.4 198c-.3 1.4-.4 2.7-.4 4.1C0 214.2 9.8 224 21.9 224l468.1 0c12.1 0 21.9-9.8 21.9-21.9c0-1.4-.1-2.8-.4-4.1l-13.3-70-48.9 0 9.1 48L53.4 176l9.1-48-48.9 0zM.4 326c-.3 1.4-.4 2.7-.4 4.1C0 342.2 9.8 352 21.9 352l468.1 0c12.1 0 21.9-9.8 21.9-21.9c0-1.4-.1-2.8-.4-4.1l-13.3-70-48.9 0 9.1 48L53.4 304l9.1-48-48.9 0L.4 326zm0 128c-.3 1.4-.4 2.7-.4 4.1C0 470.2 9.8 480 21.9 480l468.1 0c12.1 0 21.9-9.8 21.9-21.9c0-1.4-.1-2.8-.4-4.1l-13.3-70-48.9 0 9.1 48L53.4 432l9.1-48-48.9 0L.4 454z" />
    </Icon>
);

export default Shutters;