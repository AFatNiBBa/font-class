
import { Icon } from "../../index";

/**
 * A component that renders the `person-shelter` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-shelter?s=sharp-light person-shelter}
 * @preview ![person-shelter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-shelter.svg)
 */
const PersonShelter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 162.7L32 512 0 512 0 144 256 0 512 144l0 368-32 0 0-349.3L256 36.7 32 162.7zM272 168a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-64 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 64l96 0 8.9 0 4.7 7.6 64 104 8.4 13.6L362.8 374l-8.4-13.6L312 291.5 312 496l0 16-32 0 0-16 0-96-48 0 0 96 0 16-32 0 0-16 0-204.5-42.4 68.9L149.2 374 122 357.2l8.4-13.6 64-104 4.7-7.6 8.9 0zm72 32l-48 0 0 104 48 0 0-104z" />
    </Icon>
);

export default PersonShelter;