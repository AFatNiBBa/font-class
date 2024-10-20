
import { Icon, generic } from "../../index";

/**
 * A component that renders the `h3` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h3?s=sharp-duotone-solid h3}
 * @preview ![h3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/h3.svg)
 */
const H3: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 96 0 256 0 416l0 32 64 0 0-32 0-128 192 0 0 128 0 32 64 0 0-32 0-160 0-160 0-32-64 0 0 32 0 128L64 224 64 96l0-32L0 64z" />
        <path d="M624 64l0 45.3-9.4 9.4-89.5 89.5C589 210.8 640 263.4 640 328l0 32-4.3 0c-14 50.7-60.5 88-115.7 88l-60.3 0c-40.4 0-75.6-27.5-85.4-66.7L369 359.8 431 344.2l5.4 21.6c2.7 10.7 12.3 18.2 23.3 18.2l60.3 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-72 0-16 0 0-61.3L514.7 128 400 128l-32 0 0-64 32 0 192 0 32 0z" />
    </Icon>
);

export default H3;