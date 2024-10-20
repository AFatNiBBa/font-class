
import { Icon, generic } from "../../index";

/**
 * A component that renders the `octagon-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-check?s=sharp-duotone-solid octagon-check}
 * @preview ![octagon-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/octagon-check.svg)
 */
const OctagonCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160L160 0 352 0 512 160l0 192L352 512l-192 0L0 352 0 160zm126.1 96c.3 .3 .6 .6 1 1c5.3 5.3 10.7 10.7 16 16c21.3 21.3 42.7 42.7 64 64l17 17 17-17c42.7-42.7 85.3-85.3 128-128c5.3-5.3 10.7-10.7 16-16c.3-.3 .6-.6 1-1L352 158.1l-1 1c-5.3 5.3-10.7 10.7-16 16c-37 37-74 74-111 111c-15.7-15.7-31.4-31.3-47-47c-5.3-5.3-10.7-10.7-16-16c-.3-.3-.6-.6-1-1L126.1 256z" />
        <path d="M385 193L241 337l-17 17-17-17-80-80L161 223l63 63L351 159 385 193z" />
    </Icon>
);

export default OctagonCheck;