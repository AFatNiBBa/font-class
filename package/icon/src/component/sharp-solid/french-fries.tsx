
import { Icon } from "../../index";

/**
 * A component that renders the `french-fries` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/french-fries?s=sharp-solid french-fries}
 * @preview ![french-fries](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/french-fries.svg)
 */
const FrenchFries: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 32L97.4 221.4 117.7 272l10.3 0 0-181.3L112 0 64 32zM18.7 192l41.1 0L41.8 90.5 0 80 18.7 192zM384 80L342.7 90.3 325.8 192l39.6 0L384 80zM320 32L256 48l0 224 10.3 0 23.4-58.6L320 32zM160 272l64 0 0-32 0-208L160 0l0 272zM0 224L64 512l256 0 64-288-64 0-32 80L96 304 64 224 0 224z" />
    </Icon>
);

export default FrenchFries;