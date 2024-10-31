
import { Icon } from "../../index";

/**
 * A component that renders the `suitcase` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase?s=sharp-thin suitcase}
 * @preview ![suitcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/suitcase.svg)
 */
const Suitcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M136 0l-8 0 0 8 0 88L16 96 0 96l0 16L0 464l0 16 16 0 480 0 16 0 0-16 0-352 0-16-16 0L384 96l0-88 0-8-8 0L136 0zM368 96L144 96l0-80 224 0 0 80zM136 112l240 0 32 0 0 352-304 0 0-352 32 0zm-48 0l0 352-72 0 0-352 72 0zM424 464l0-352 72 0 0 352-72 0z" />
    </Icon>
);

export default Suitcase;