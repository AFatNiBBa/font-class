
import { Icon } from "../../index";

/**
 * A component that renders the `clapperboard` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard?s=sharp-light clapperboard}
 * @preview ![clapperboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clapperboard.svg)
 */
const Clapperboard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 192l448 0 0 256L32 448l0-256zm350.6-32l96-96 1.4 0 0 96-97.4 0zm-45.3 0l-106.7 0 96-96 106.7 0-96 96zm-56-96l-96 96L78.6 160l96-96 106.7 0zm-152 0l-96 96L32 160l0-96 97.4 0zM512 176l0-16 0-96 0-32-32 0L32 32 0 32 0 64l0 96 0 16 0 16L0 448l0 32 32 0 448 0 32 0 0-32 0-256 0-16z" />
    </Icon>
);

export default Clapperboard;