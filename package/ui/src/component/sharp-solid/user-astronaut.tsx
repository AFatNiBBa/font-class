
import { Icon } from "../../index";

/**
 * A component that renders the `user-astronaut` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-astronaut?s=sharp-solid user-astronaut}
 * @preview ![user-astronaut](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-astronaut.svg)
 */
const UserAstronaut: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M370.7 96C346 39.5 289.6 0 224 0S102 39.5 77.3 96L48 96l0 128 29.3 0c24.7 56.5 81.1 96 146.7 96s122-39.5 146.7-96l29.3 0 0-128-29.3 0zM336 128l0 32c0 53-43 96-96 96l-32 0c-53 0-96-43-96-96l0-32 32-32 160 0 32 32zM192 160l-16-32-16 32-32 16 32 16 16 32 16-32 32-16-32-16zM97 304l-49 0L0 512l128 0 0-96 192 0 0 96 128 0L400 304l-49 0c-33.8 29.9-78.3 48-127 48s-93.2-18.1-127-48zm95 144l-32 0 0 16 0 48 32 0 0-48 0-16zm80 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default UserAstronaut;