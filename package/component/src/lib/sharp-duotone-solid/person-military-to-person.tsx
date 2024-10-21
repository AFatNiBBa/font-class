
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-military-to-person` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-military-to-person?s=sharp-duotone-solid person-military-to-person}
 * @preview ![person-military-to-person](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-military-to-person.svg)
 */
const PersonMilitaryToPerson: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M272 432l96 80 16 0 0-56 104 0 24 0 0-48-24 0-104 0 0-56-16 0-96 80zm16-112l192 0L448 192l-128 0L288 320zM320 96a64 64 0 1 0 128 0A64 64 0 1 0 320 96z" />
        <path d="M200 0L56 14.1l0 32 144 0L200 0zM189.5 78.1l-122.9 0C64.9 83.8 64 89.8 64 96c0 35.3 28.7 64 64 64s64-28.7 64-64c0-6.2-.9-12.2-2.5-17.9zM192 192L83.8 192 217.8 295 192 192zM32 320l165.8 0L58.7 213.1 32 320zm96 136l0 56 16 0 96-80-96-80-16 0 0 56L24 408 0 408l0 48 24 0 104 0z" />
    </Icon>
);

export default PersonMilitaryToPerson;