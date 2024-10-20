
import { Icon } from "../../index";

/**
 * A component that renders the `camcorder` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camcorder?s=sharp-thin camcorder}
 * @preview ![camcorder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/camcorder.svg)
 */
const Camcorder: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M56 32l-8 0 0 8 0 120-32 0L0 160l0 16L0 464l0 16 16 0 352 0 16 0 0-16 0-65.5 0-27.7 0-101.6 0-27.7 0-65.5 0-16-16 0L64 160 64 48l248 0 8 0 0-16-8 0L56 32zM48 176l16 0 304 0 0 93.2 0 101.6 0 93.2L16 464l0-288 32 0zM560 455.9L416 394.9l0 17.4 144 60.9 16 6.8 0-17.4 0-285.3 0-17.4-16 6.8L416 227.7l0 17.4 144-60.9 0 271.7zM64 240l0 16 8 0 240 0 8 0 0-16-8 0L72 240l-8 0z" />
    </Icon>
);

export default Camcorder;