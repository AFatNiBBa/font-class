
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dragon` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dragon?s=sharp-duotone-solid dragon}
 * @preview ![dragon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dragon.svg)
 */
const Dragon: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 256l176-16L96 320l256 0 0-16 0-29.4 0-26.6 0-36.8L160 96 0 256z" />
        <path d="M448 160l0 61.4L617.4 327.3 640 341.4l0 26.6 0 96 0 48-48 0-96 0-64 0L32.3 512l-.7 0L0 512l0-31.7 0-.7L0 448l30.6 0L448 410.7l0-18.7-83.2-62.4L352 320l0-16 0-29.4 0-26.6 0-120-64-16 0-32 48-24L288 32l0-32 96 0 32 0 96 0 96 128 0 64-96 0-32-32-32 0zm62.7-80.3L464.3 68.1c-.2 1.3-.3 2.6-.3 3.9c0 13.3 10.7 24 24 24c10.6 0 19.5-6.8 22.7-16.3z" />
    </Icon>
);

export default Dragon;