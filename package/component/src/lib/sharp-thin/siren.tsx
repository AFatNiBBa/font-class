
import { Icon } from "../../index";

/**
 * A component that renders the `siren` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/siren?s=sharp-thin siren}
 * @preview ![siren](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/siren.svg)
 */
const Siren: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M368 96l28 224-16.1 0-26-208L94.1 112l-26 208L52 320 80 96l288 0zM149 160L129 320l-16.1 0 20-160 16.1 0zM16 368l0 96 416 0 0-96L16 368zM0 352l16 0 416 0 16 0 0 16 0 96 0 16-16 0L16 480 0 480l0-16 0-96 0-16z" />
    </Icon>
);

export default Siren;