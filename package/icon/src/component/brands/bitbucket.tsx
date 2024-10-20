
import { Icon } from "../../index";

/**
 * A component that renders the `bitbucket` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bitbucket?s=brands bitbucket}
 * @preview ![bitbucket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/bitbucket.svg)
 */
const Bitbucket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M22.2 32A16 16 0 0 0 6 47.8a26.35 26.35 0 0 0 .2 2.8l67.9 412.1a21.77 21.77 0 0 0 21.3 18.2h325.7a16 16 0 0 0 16-13.4L505 50.7a16 16 0 0 0-13.2-18.3 24.58 24.58 0 0 0-2.8-.2L22.2 32zm285.9 297.8h-104l-28.1-147h157.3l-25.2 147z" />
    </Icon>
);

export default Bitbucket;