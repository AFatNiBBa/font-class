
import { Icon } from "../../index";

/**
 * A component that renders the `school-flag` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school-flag?s=sharp-regular school-flag}
 * @preview ![school-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/school-flag.svg)
 */
const SchoolFlag: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M312 0L416 0l0 96-97.9 0 89.6 64L552 160l24 0 0 24 0 304 0 24-24 0-216 0-96 0L24 512 0 512l0-24L0 184l0-24 24 0 144.3 0L264 91.6 264 24l0-24 24 0 24 0zM528 464l0-256-128 0-7.7 0-6.3-4.5-98.1-70-98.1 70-6.3 4.5-7.7 0L48 208l0 256 192 0 0-64c0-26.5 21.5-48 48-48s48 21.5 48 48l0 64 192 0zM240 240a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm-80 16l0 64-64 0 0-64 64 0zm256 0l64 0 0 64-64 0 0-64zM160 352l0 64-64 0 0-64 64 0zm320 0l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default SchoolFlag;