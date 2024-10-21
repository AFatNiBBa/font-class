
import { Icon } from "../../index";

/**
 * A component that renders the `bullseye` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye?s=thin bullseye}
 * @preview ![bullseye](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bullseye.svg)
 */
const Bullseye: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-408a152 152 0 1 1 0 304 152 152 0 1 1 0-304zm0 320a168 168 0 1 0 0-336 168 168 0 1 0 0 336zM200 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm128 0a72 72 0 1 0 -144 0 72 72 0 1 0 144 0z" />
    </Icon>
);

export default Bullseye;