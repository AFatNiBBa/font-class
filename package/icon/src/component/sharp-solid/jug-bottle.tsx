
import { Icon } from "../../index";

/**
 * A component that renders the `jug-bottle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jug-bottle?s=sharp-solid jug-bottle}
 * @preview ![jug-bottle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/jug-bottle.svg)
 */
const JugBottle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 0L96 0l0 48L64 48l0 48 192 0 0-48-32 0 0-48zM128 128C57.3 128 0 185.3 0 256L0 512l384 0 0-384-256 0zm192 96l0 160-64 0 0-160 64 0zM576 64L448 64l0 64 128 0 0-64zM448.3 160L416 175.1 416 512l192 0 32-32 0-64-24-24 24-24 0-64-24-24 24-24 0-65.9L575.7 160l-127.5 0z" />
    </Icon>
);

export default JugBottle;