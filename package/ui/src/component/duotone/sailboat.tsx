
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sailboat` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sailboat?s=duotone sailboat}
 * @preview ![sailboat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sailboat.svg)
 */
const Sailboat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M66.1 328.1l128-224c3.6-6.3 11-9.4 18-7.5s11.9 8.2 11.9 15.5l0 224c0 8.8-7.2 16-16 16L80 352c-5.7 0-11-3-13.8-8s-2.9-11-.1-16zM256 16c0-7 4.5-13.2 11.2-15.3s13.9 .4 17.9 6.1l224 320c1.9 2.7 2.9 6 2.9 9.2c0 2.5-.6 5.1-1.8 7.4c-2.8 5.3-8.2 8.6-14.2 8.6l-224 0c-8.8 0-16-7.2-16-16l0-320z" />
        <path d="M5.7 404.3C2.8 394.1 10.5 384 21.1 384H554.9c10.6 0 18.3 10.1 15.4 20.3l-4 14.3C550.7 473.9 500.4 512 443 512H133C75.6 512 25.3 473.9 9.7 418.7l-4-14.3z" />
    </Icon>
);

export default Sailboat;