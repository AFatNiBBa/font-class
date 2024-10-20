
import { Icon, generic } from "../../index";

/**
 * A component that renders the `school-flag` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school-flag?s=sharp-duotone-solid school-flag}
 * @preview ![school-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/school-flag.svg)
 */
const SchoolFlag: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l0 32L0 480l0 32 32 0 208 0 0-112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112 208 0 32 0 0-32 0-288 0-32-32 0-133.7 0L320.7 96l-.7 0c-21.3 0-42.7 0-64 0l-.7 0-89.6 64L32 160 0 160zm64 64c21.3 0 42.7 0 64 0l0 96c-21.3 0-42.7 0-64 0l0-96zm0 128l64 0 0 96-64 0 0-96zM336 240a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm112-16c21.3 0 42.7 0 64 0l0 96c-21.3 0-42.7 0-64 0l0-96zm0 128l64 0 0 96-64 0 0-96z" />
        <path d="M320 96l-64 0 0-32 0-32 0-32 64 0 96 0 0 96-96 0zM64 224l64 0 0 96-64 0 0-96zm384 0l64 0 0 96-64 0 0-96zM128 352l0 96-64 0 0-96 64 0zm320 0l64 0 0 96-64 0 0-96z" />
    </Icon>
);

export default SchoolFlag;