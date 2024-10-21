
import { Icon, generic } from "../../index";

/**
 * A component that renders the `watch-smart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch-smart?s=sharp-duotone-solid watch-smart}
 * @preview ![watch-smart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/watch-smart.svg)
 */
const WatchSmart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64l64 0 256 0 64 0 0 384-64 0L64 448 0 448 0 64zm168 72l0 24 0 96 0 9.9 7 7 48 48 17 17L273.9 304l-17-17-41-41 0-86.1 0-24-24 0-24 0z" />
        <path d="M64 0l0 64 256 0 0-64L64 0zm0 512l256 0 0-64L64 448l0 64zM216 160l0-24-48 0 0 24 0 96 0 9.9 7 7 48 48 17 17L273.9 304l-17-17-41-41 0-86.1z" />
    </Icon>
);

export default WatchSmart;