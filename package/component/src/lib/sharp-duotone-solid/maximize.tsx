
import { Icon, generic } from "../../index";

/**
 * A component that renders the `maximize` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/maximize?s=sharp-duotone-solid maximize}
 * @preview ![maximize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/maximize.svg)
 */
const Maximize: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 32l0 160 32 32 52-52 84 84 56-56-84-84 52-52L192 32 32 32zM256 312l84 84-52 52 32 32 160 0 0-160-32-32-52 52-84-84-56 56z" />
        <path d="M480 192l-32 32-52-52L172 396l52 52-32 32L32 480l0-160 32-32 52 52L340 116 288 64l32-32 160 0 0 160z" />
    </Icon>
);

export default Maximize;