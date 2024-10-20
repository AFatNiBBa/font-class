
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-check?s=sharp-duotone-solid circle-check}
 * @preview ![circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-check.svg)
 */
const CircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm126.1 0L160 222.1c.3 .3 .6 .6 1 1c5.3 5.3 10.7 10.7 16 16c15.7 15.7 31.4 31.4 47 47c37-37 74-74 111-111c5.3-5.3 10.7-10.7 16-16c.3-.3 .6-.6 1-1L385.9 192c-.3 .3-.6 .6-1 1l-16 16L241 337l-17 17-17-17-64-64c-5.3-5.3-10.7-10.7-16-16l-1-1z" />
        <path d="M385 193L241 337l-17 17-17-17-80-80L161 223l63 63L351 159 385 193z" />
    </Icon>
);

export default CircleCheck;