
import { Icon } from "../../index";

/**
 * A component that renders the `ornament` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ornament?s=sharp-light ornament}
 * @preview ![ornament](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ornament.svg)
 */
const Ornament: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M208 64l-32 0 0-16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16zm32 0l0-16c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 16-16 0L96 64l0 32 0 48 0 9.7C38.6 186.9 0 248.9 0 320C0 426 86 512 192 512s192-86 192-192c0-71.1-38.6-133.1-96-166.3l0-9.7 0-48 0-32-32 0-16 0zm21.8 112c23 11.2 43 27.7 58.2 48L64 224c15.2-20.3 35.2-36.8 58.2-48l5.8 0 128 0 5.8 0zM144 96l32 0 32 0 32 0 16 0 0 48-128 0 0-48 16 0zM32 320c0-22.8 4.8-44.4 13.3-64l293.4 0c8.6 19.6 13.3 41.2 13.3 64s-4.7 44.4-13.3 64L45.3 384C36.8 364.4 32 342.8 32 320zM192 480c-52.3 0-98.8-25.1-128-64l256 0c-29.2 38.9-75.7 64-128 64z" />
    </Icon>
);

export default Ornament;