
import { Icon } from "../../index";

/**
 * A component that renders the `display` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display?s=light display}
 * @preview ![display](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/display.svg)
 */
const Display: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 288c0 17.7 14.3 32 32 32l167.7 0c.2 0 .4 0 .6 0l111.5 0c.2 0 .4 0 .6 0L512 384c17.7 0 32-14.3 32-32l0-288c0-17.7-14.3-32-32-32L64 32zM213.1 416L64 416c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L512 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-149.1 0 10.7 64 58.4 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-72 0-144 0-72 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l58.4 0 10.7-64zm32.4 0l-10.7 64 106.2 0-10.7-64-84.9 0z" />
    </Icon>
);

export default Display;