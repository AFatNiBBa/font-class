
import { Icon } from "../../index";

/**
 * A component that renders the `sourcetree` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sourcetree?s=brands sourcetree}
 * @preview ![sourcetree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/sourcetree.svg)
 */
const Sourcetree: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M427.2 203c0-112.1-90.9-203-203-203C112.1-.2 21.2 90.6 21 202.6A202.86 202.86 0 0 0 161.5 396v101.7a14.3 14.3 0 0 0 14.3 14.3h96.4a14.3 14.3 0 0 0 14.3-14.3V396.1A203.18 203.18 0 0 0 427.2 203zm-271.6 0c0-90.8 137.3-90.8 137.3 0-.1 89.9-137.3 91-137.3 0z" />
    </Icon>
);

export default Sourcetree;