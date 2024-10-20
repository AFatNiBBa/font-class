
import { Icon } from "../../index";

/**
 * A component that renders the `hand-fist` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-fist?s=sharp-solid hand-fist}
 * @preview ![hand-fist](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hand-fist.svg)
 */
const HandFist: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0l0 144-64 0L160 0l64 0zM64 32l64 0 0 112-64 0L64 32zm192 0l64 0 0 160-64 0 0-160zm96 64l64 0 0 128-64 0 0-128zM32 253.7L32 176l192 0 0 48 0 32-96 0-16 0 0 32 16 0 112 0 16 0 0-16 0-48 64 0 0 32 96 0c0 52.3-25.1 98.8-64 128l0 128-224 0 0-110.4c-17.3-7.9-33.2-18.8-46.9-32.5l-2.3-2.3c-30-30-46.9-70.7-46.9-113.1z" />
    </Icon>
);

export default HandFist;