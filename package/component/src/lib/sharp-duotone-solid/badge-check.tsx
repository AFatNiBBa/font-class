
import { Icon, generic } from "../../index";

/**
 * A component that renders the `badge-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/badge-check?s=sharp-duotone-solid badge-check}
 * @preview ![badge-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/badge-check.svg)
 */
const BadgeCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 36.8 20.7 68.8 51.1 84.9C41 373.8 49 411 75 437s63.3 34 96.1 23.9C187.2 491.3 219.2 512 256 512s68.8-20.7 84.9-51.1C373.8 471 411 463 437 437s34-63.3 23.9-96.1C491.3 324.8 512 292.8 512 256s-20.7-68.8-51.1-84.9C471 138.2 463 101 437 75s-63.3-34-96.1-23.9C324.8 20.7 292.8 0 256 0s-68.8 20.7-84.9 51.1C138.2 41 101 49 75 75s-34 63.3-23.9 96.1C20.7 187.2 0 219.2 0 256zm126.1 0L160 222.1c.3 .3 .6 .6 1 1c5.3 5.3 10.7 10.7 16 16c15.7 15.7 31.4 31.4 47 47c37-37 74-74 111-111c5.3-5.3 10.7-10.7 16-16c.3-.3 .6-.6 1-1L385.9 192l-1 1c-5.3 5.3-10.7 10.7-16 16c-42.7 42.7-85.3 85.3-128 128c-5.7 5.7-11.3 11.3-17 17c-5.7-5.7-11.3-11.3-17-17c-21.3-21.3-42.7-42.7-64-64c-5.3-5.3-10.7-10.7-16-16c-.3-.3-.6-.6-1-1z" />
        <path d="M385 193L241 337l-17 17-17-17-80-80L161 223l63 63L351 159 385 193z" />
    </Icon>
);

export default BadgeCheck;