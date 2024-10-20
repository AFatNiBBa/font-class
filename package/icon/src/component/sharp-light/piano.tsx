
import { Icon } from "../../index";

/**
 * A component that renders the `piano` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano?s=sharp-light piano}
 * @preview ![piano](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/piano.svg)
 */
const Piano: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432 384l0 32 0 16-32 0 0-16 0-32-32 0 0 32 0 16-32 0 0-16 0-32-96 0 0 32 0 16-32 0 0-16 0-32-32 0 0 32 0 16-32 0 0-16 0-32-32 0 0 32 0 16-32 0 0-16 0-32-48 0 0 96 448 0 0-96-48 0zm0-32l48 0 0-44.2L369.7 252.6 352 243.8l0-19.8 0-32c0-88.4-71.6-160-160-160S32 103.6 32 192l0 160 48 0 32 0 32 0 32 0 32 0 32 0 96 0 32 0 32 0 32 0zm80-64l0 64 0 16 0 16 0 96 0 32-32 0L32 512 0 512l0-32 0-96 0-16 0-16L0 192C0 86 86 0 192 0S384 86 384 192l0 32 128 64z" />
    </Icon>
);

export default Piano;