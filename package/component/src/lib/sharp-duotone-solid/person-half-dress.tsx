
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-half-dress` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-half-dress?s=sharp-duotone-solid person-half-dress}
 * @preview ![person-half-dress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-half-dress.svg)
 */
const PersonHalfDress: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M160 0c26.5 0 48 21.5 48 48s-21.5 48-48 48c0-32 0-64 0-96zm0 128l51.1 0 17.5 0 9.4 14.8 81.7 128-53.9 34.4-33.8-53L232 480l0 32-64 0 0-32 0-128-8 0 0-224z" />
        <path d="M88 512l64 0 0-32 0-96 8 0 0-256-51.1 0-17.5 0-9.4 14.8L.2 270.8l53.9 34.4 42-65.8L48 384l40 0 0 96 0 32zM160 0s0 0 0 0c-26.5 0-48 21.5-48 48s21.5 48 48 48c0 0 0 0 0 0l0-96z" />
    </Icon>
);

export default PersonHalfDress;