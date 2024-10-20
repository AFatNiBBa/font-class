
import { Icon } from "../../index";

/**
 * A component that renders the `divide` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/divide?s=thin divide}
 * @preview ![divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/divide.svg)
 */
const Divide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0 144a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM424 264c4.4 0 8-3.6 8-8s-3.6-8-8-8L24 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l400 0z" />
    </Icon>
);

export default Divide;