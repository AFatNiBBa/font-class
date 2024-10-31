
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jet-fighter-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jet-fighter-up?s=duotone jet-fighter-up}
 * @preview ![jet-fighter-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/jet-fighter-up.svg)
 */
const JetFighterUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 296l144-80 0 168L48 384l0-88zm272-80l144 80 0 88-144 0 0-168z" />
        <path d="M270.7 9.7C268.2 3.8 262.4 0 256 0s-12.2 3.8-14.7 9.7L197.2 112.6c-3.4 8-5.2 16.5-5.2 25.2l0 278.9L133.5 468c-3.5 3-5.5 7.4-5.5 12l0 16c0 8.8 7.2 16 16 16l96 0 0-64c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64 96 0c8.8 0 16-7.2 16-16l0-16c0-4.6-2-9-5.5-12L320 416.7l0-278.9c0-8.7-1.8-17.2-5.2-25.2L270.7 9.7zM24 256c-13.3 0-24 10.7-24 24L0 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm488 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112z" />
    </Icon>
);

export default JetFighterUp;