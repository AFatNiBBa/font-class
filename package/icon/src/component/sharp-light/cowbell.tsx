
import { Icon } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=sharp-light cowbell}
 * @preview ![cowbell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cowbell.svg)
 */
const Cowbell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 0L128 0l0 16 0 80L64 96 6.4 384 0 416l32.6 0 382.7 0 32.6 0-6.4-32L384 96l-64 0 0-80 0-16L304 0 144 0zM288 96L160 96l0-64 128 0 0 64zM144 128l160 0 53.8 0L409 384 39 384 90.2 128l53.8 0zm16 320c0 35.3 28.7 64 64 64s64-28.7 64-64l-32 0c0 17.7-14.3 32-32 32s-32-14.3-32-32l-32 0z" />
    </Icon>
);

export default Cowbell;