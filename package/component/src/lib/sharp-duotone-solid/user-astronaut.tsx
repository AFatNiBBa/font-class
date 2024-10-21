
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-astronaut` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-astronaut?s=sharp-duotone-solid user-astronaut}
 * @preview ![user-astronaut](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-astronaut.svg)
 */
const UserAstronaut: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M112 128l0 32c0 53 43 96 96 96l32 0c53 0 96-43 96-96l0-32L304 96 144 96l-32 32zm16 48l32-16 16-32 16 32 32 16-32 16-16 32-16-32-32-16zm0 240l0 96 32 0 0-48 0-16 32 0 0 16 0 48 128 0 0-96-192 0zm160 48a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M224 0c65.6 0 122 39.5 146.7 96L400 96l0 128-29.3 0C346 280.5 289.6 320 224 320s-122-39.5-146.7-96L48 224 48 96l29.3 0C102 39.5 158.4 0 224 0zM336 160l0-32L304 96 144 96l-32 32 0 32c0 53 43 96 96 96l32 0c53 0 96-43 96-96zM97 304c33.8 29.9 78.3 48 127 48s93.2-18.1 127-48l49 0 48 208-128 0 0-96-192 0 0 96L0 512 48 304l49 0z" />
    </Icon>
);

export default UserAstronaut;