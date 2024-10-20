
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-clock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-clock?s=sharp-duotone-solid trash-clock}
 * @preview ![trash-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trash-clock.svg)
 */
const TrashClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 96L56 512l274.8 0C285.6 480.1 256 427.5 256 368c0-89.9 67.4-164 154.4-174.7L416 96 32 96z" />
        <path d="M144 0L304 0l16 32 128 0 0 64L0 96 0 32l128 0L144 0zM288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm160-80l-32 0 0 16 0 64 0 16 16 0 48 0 16 0 0-32-16 0-32 0 0-48 0-16z" />
    </Icon>
);

export default TrashClock;