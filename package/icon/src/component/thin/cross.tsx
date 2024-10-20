
import { Icon } from "../../index";

/**
 * A component that renders the `cross` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=thin cross}
 * @preview ![cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/cross.svg)
 */
const Cross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 96 96 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-96 0 0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-224-96 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l96 0 0-96zm32-16c-8.8 0-16 7.2-16 16l0 104c0 4.4-3.6 8-8 8L32 144c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l104 0c4.4 0 8 3.6 8 8l0 232c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16l0-232c0-4.4 3.6-8 8-8l104 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-104 0c-4.4 0-8-3.6-8-8l0-104c0-8.8-7.2-16-16-16l-64 0z" />
    </Icon>
);

export default Cross;