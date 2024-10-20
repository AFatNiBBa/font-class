
import { Icon } from "../../index";

/**
 * A component that renders the `helmet-battle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-battle?s=sharp-solid helmet-battle}
 * @preview ![helmet-battle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/helmet-battle.svg)
 */
const HelmetBattle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 256L64 0 0 224l0 32 64 0zm32-32c0 80-32 192-32 192l192 96 0-256-96-32 0-32 256 0 0 32-96 32 0 256 192-96s-32-112-32-192C480 80 288 0 288 0S96 80 96 224zM512 0l0 256 64 0 0-32L512 0z" />
    </Icon>
);

export default HelmetBattle;