
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-chalkboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-chalkboard?s=sharp-duotone-solid person-chalkboard}
 * @preview ![person-chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-chalkboard.svg)
 */
const PersonChalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32.4 278.5l54.9 33L103.7 284 120 256.9 120 480l0 32 64 0 0-32 0-128 16 0 0 128 0 32 64 0 0-32 0-288 56 0 64 0 16 0 32 0 0-64-32 0-16 0-64 0-76.9 0-102.2 0-18.1 0-9.3 15.5L48.9 251.1 32.4 278.5zM144 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M384 64l192 0 0 192-192 0 0-64-64 0 0 64 0 64 64 0 192 0 64 0 0-64 0-192 0-64L576 0 384 0 320 0l0 64 0 64 64 0 0-64z" />
    </Icon>
);

export default PersonChalkboard;