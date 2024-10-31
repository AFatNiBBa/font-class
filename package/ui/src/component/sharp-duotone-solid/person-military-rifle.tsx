
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-military-rifle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-military-rifle?s=sharp-duotone-solid person-military-rifle}
 * @preview ![person-military-rifle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-military-rifle.svg)
 */
const PersonMilitaryRifle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M143 241.3L153.2 224l16.7 0C230.6 310.7 291.3 397.4 352 484.1l0 27.9-19.5 0L143 241.3zM176 112c0-11.4 2.4-22.2 6.7-32l146.7 0c4.3 9.8 6.7 20.6 6.7 32c0 44.2-35.8 80-80 80s-80-35.8-80-80zM331.6 224L421.9 67.7l-13.9-8L424 32l13.9 8 27.7 16 13.9 8L416 173.9l29.3 16.9-52.4 90.8-22.4-38L358.8 224 336 224l-4.4 0z" />
        <path d="M352 0L160 32l0 48 192 0 0-80zM143 241.3l-1.4 2.4-104 176L17.2 454.1l68.9 40.7 20.3-34.4L160 369.7 160 512l172.5 0L143 241.3zM352 484.1l0-114.4 53.6 90.6 20.3 34.4 68.9-40.7-20.3-34.4-104-176L358.8 224 336 224l-160 0-6.1 0L352 484.1zM272 296a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default PersonMilitaryRifle;