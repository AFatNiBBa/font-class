
import { Icon } from "../../index";

/**
 * A component that renders the `school-flag` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school-flag?s=sharp-solid school-flag}
 * @preview ![school-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/school-flag.svg)
 */
const SchoolFlag: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 0l96 0 0 96-95.3 0 89.6 64L544 160l32 0 0 32 0 288 0 32-32 0-208 0 0-112c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 112L32 512 0 512l0-32L0 192l0-32 32 0 133.7 0L256 95.5 256 32l0-32 32 0 32 0zm16 240a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM128 224l-64 0 0 96 64 0 0-96zm320 0l0 96 64 0 0-96-64 0zM128 352l-64 0 0 96 64 0 0-96zm384 0l-64 0 0 96 64 0 0-96z" />
    </Icon>
);

export default SchoolFlag;