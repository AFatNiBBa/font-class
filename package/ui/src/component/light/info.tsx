
import { Icon } from "../../index";

/**
 * A component that renders the `info` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=light info}
 * @preview ![info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/info.svg)
 */
const Info: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M64 64a32 32 0 1 1 64 0A32 32 0 1 1 64 64zM16 176c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 272 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 480c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-256-48 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Info;