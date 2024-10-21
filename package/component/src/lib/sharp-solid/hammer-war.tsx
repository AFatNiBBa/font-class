
import { Icon } from "../../index";

/**
 * A component that renders the `hammer-war` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-war?s=sharp-solid hammer-war}
 * @preview ![hammer-war](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hammer-war.svg)
 */
const HammerWar: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 0l0 32 0 24.9L336 32l48 0 0 256-48 0L192 256 48 288 0 288 0 32l48 0L160 56.9 160 32l0-32 64 0zM192 288.8l32 7.1L224 480l0 32-64 0 0-32 0-184.1 32-7.1z" />
    </Icon>
);

export default HammerWar;