
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-pinball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-pinball?s=duotone person-pinball}
 * @preview ![person-pinball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-pinball.svg)
 */
const PersonPinball: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 288l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 320 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256 0-8 0-37.8L640 32c0-17.7-14.3-32-32-32L544 0c-17.7 0-32 14.3-32 32l0 42.8c0 6.9 1.1 13.7 3.3 20.2l32.8 98.5-295 49.2c1.9 4 2.9 8.6 2.9 13.3c0 17.7-14.3 32-32 32l-32 0zm112 24a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M32 48a48 48 0 1 1 96 0A48 48 0 1 1 32 48zM96 241.7l0 65.1 49.9 49.9c9 9 14.1 21.2 14.1 33.9l0 89.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L18.7 320C6.7 308 0 291.7 0 274.7l0-88.1C0 154.2 26.2 128 58.6 128c24.1 0 46.5 12 59.9 32l42.6 64 62.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-71.4 0c-16 0-31-8-39.9-21.4L96 241.7zM0 480L0 346.5l64 64L64 480s0 0 0 0c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
    </Icon>
);

export default PersonPinball;