
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jet-fighter-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jet-fighter-up?s=sharp-duotone-solid jet-fighter-up}
 * @preview ![jet-fighter-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/jet-fighter-up.svg)
 */
const JetFighterUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 296l144-80 0 168L48 384l0-88zm272-80l144 80 0 88-144 0 0-168z" />
        <path d="M192 416l0-16 0-16 0-256L240 0l32 0 48 128 0 256 0 16 0 16 64 64 0 32-112 0 0-48 0-16-32 0 0 16 0 48-112 0 0-32 64-64zM0 416l0-24L0 280l0-24 48 0 0 24 0 112 0 24L0 416zm464-24l0-112 0-24 48 0 0 24 0 112 0 24-48 0 0-24z" />
    </Icon>
);

export default JetFighterUp;