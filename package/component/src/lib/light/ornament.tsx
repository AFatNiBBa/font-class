
import { Icon } from "../../index";

/**
 * A component that renders the `ornament` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ornament?s=light ornament}
 * @preview ![ornament](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ornament.svg)
 */
const Ornament: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 32a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm45.3 32c1.8-5 2.7-10.4 2.7-16c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 5.6 1 11 2.7 16L128 64c-17.7 0-32 14.3-32 32l0 48 0 9.7C38.6 186.9 0 248.9 0 320C0 426 86 512 192 512s192-86 192-192c0-71.1-38.6-133.1-96-166.3l0-9.7 0-48c0-17.7-14.3-32-32-32l-18.7 0zm24.6 112c23 11.2 43 27.7 58.2 48L64 224c15.2-20.3 35.2-36.8 58.2-48l5.8 0 128 0 5.8 0zM192 96l64 0 0 48-128 0 0-48 64 0zM32 320c0-22.8 4.8-44.4 13.3-64l293.4 0c8.6 19.6 13.3 41.2 13.3 64s-4.7 44.4-13.3 64L45.3 384C36.8 364.4 32 342.8 32 320zM192 480c-52.3 0-98.8-25.1-128-64l256 0c-29.2 38.9-75.7 64-128 64z" />
    </Icon>
);

export default Ornament;