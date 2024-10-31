
import { Icon } from "../../index";

/**
 * A component that renders the `hand-horns` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-horns?s=sharp-light hand-horns}
 * @preview ![hand-horns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hand-horns.svg)
 */
const HandHorns: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 0L48 0l80 0 16 0 0 16 0 128 64 0 16 0 0 16 0 16 48 0 0-96 0-16 16 0 80 0 16 0 0 16 0 144 0 16 0 112c0 88.4-71.6 160-160 160l-64 0C71.6 512 0 440.4 0 352l0-96 0-16 16 0 16 0L32 16 32 0zM224 208l0 32 0 16 0 16 0 48 48 0 0-80 0-32-48 0zm-32 64s0 0 0 0l-48 0s0 0 0 0l-32 0s0 0 0 0l-80 0 0 80c0 70.7 57.3 128 128 128l64 0c70.7 0 128-57.3 128-128l0-112 0-16 0-128-48 0 0 80 0 16 0 48 0 96 0 16-16 0-64 0-16 0-16 0-80 0-16 0 0-32 16 0 80 0 0-48zm-80-32l0-80 0-16 0-112L64 32l0 208 48 0zm32 0l48 0 0-48 0-16-48 0 0 64z" />
    </Icon>
);

export default HandHorns;