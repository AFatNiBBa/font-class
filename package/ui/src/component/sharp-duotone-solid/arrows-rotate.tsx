
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-rotate` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-rotate?s=sharp-duotone-solid arrows-rotate}
 * @preview ![arrows-rotate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-rotate.svg)
 */
const ArrowsRotate: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 288l0 32 0 128 0 32 64 0 0-32 0-51.1 17.6 17.5c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7l-60.4-21.3c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0c-5.8-5.8-11.5-11.4-17.2-17.1l50.4 0 32 0 0-64-32 0L48 288l-32 0z" />
        <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 336 160l-32 0 0 64 32 0 128 0 32 0 0-32 0-128 0-32-64 0 0 32 0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4l60.4 21.3z" />
    </Icon>
);

export default ArrowsRotate;