
import { Icon } from "../../index";

/**
 * A component that renders the `gem` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gem?s=regular gem}
 * @preview ![gem](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/gem.svg)
 */
const Gem: typeof Icon = x => (
    <Icon {...x}>
        <path d="M168.5 72L256 165l87.5-93-175 0zM383.9 99.1L311.5 176l129 0L383.9 99.1zm50 124.9L256 224 78.1 224 256 420.3 433.9 224zM71.5 176l129 0L128.1 99.1 71.5 176zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z" />
    </Icon>
);

export default Gem;