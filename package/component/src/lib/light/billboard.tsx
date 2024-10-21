
import { Icon } from "../../index";

/**
 * A component that renders the `billboard` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/billboard?s=light billboard}
 * @preview ![billboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/billboard.svg)
 */
const Billboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M432 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16L240 32l0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16L80 32C53.5 32 32 53.5 32 80l0 272-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 32 0 240 0 0 104c0 8.8 7.2 16 16 16s16-7.2 16-16l0-104 240 0 32 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-272c0-26.5-21.5-48-48-48L432 32l0-16zM320 352L64 352 64 80c0-8.8 7.2-16 16-16l128 0 0 64-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-64 160 0 0 64-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-64 128 0c8.8 0 16 7.2 16 16l0 272-256 0z" />
    </Icon>
);

export default Billboard;