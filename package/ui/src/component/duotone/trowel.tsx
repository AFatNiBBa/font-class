
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trowel` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trowel?s=duotone trowel}
 * @preview ![trowel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/trowel.svg)
 */
const Trowel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480c0 8.4 3.3 16.5 9.4 22.6s14.3 9.4 22.6 9.4c3.2 0 6.4-.5 9.5-1.5l256-80c10.7-3.3 18.9-12 21.5-22.9s-.5-22.4-8.4-30.3L245.3 312l98.6-98.6-.3-.3c-14.9-14.9-29.8-29.8-44.7-44.7l-.3-.3L200 266.7l-65.4-65.4c-7.9-7.9-19.4-11.1-30.3-8.4s-19.6 10.8-22.9 21.5l-80 256C.5 473.6 0 476.8 0 480z" />
        <path d="M298.9 115.6c-14.6 14.6-14.6 38.2 0 52.8l44.7 44.7c14.6 14.6 38.2 14.6 52.8 0l95.4-95.4c26.9-26.9 26.9-70.5 0-97.5s-70.5-26.9-97.5 0l-95.4 95.4z" />
    </Icon>
);

export default Trowel;