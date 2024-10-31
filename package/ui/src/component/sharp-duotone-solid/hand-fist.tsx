
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-fist` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-fist?s=sharp-duotone-solid hand-fist}
 * @preview ![hand-fist](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-fist.svg)
 */
const HandFist: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 176l0 77.7c0 42.4 16.9 83.1 46.9 113.1l2.3 2.3c13.7 13.7 29.6 24.6 46.9 32.5L128 512l224 0 0-128c38.9-29.2 64-75.7 64-128l-96 0 0-32-64 0 0 48 0 16-16 0-112 0-16 0 0-32 16 0 96 0 0-32 0-48L32 176z" />
        <path d="M160 0l0 144 64 0L224 0 160 0zM128 32L64 32l0 112 64 0 0-112zm192 0l-64 0 0 160 64 0 0-160zm96 64l-64 0 0 128 64 0 0-128z" />
    </Icon>
);

export default HandFist;