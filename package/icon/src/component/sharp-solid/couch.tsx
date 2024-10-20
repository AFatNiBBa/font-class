
import { Icon } from "../../index";

/**
 * A component that renders the `couch` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/couch?s=sharp-solid couch}
 * @preview ![couch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/couch.svg)
 */
const Couch: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 32l0 160 32 0 32 0 0 32 0 96 384 0 0-96 0-32 32 0 32 0 0-160L64 32zm0 192L0 224 0 480l96 0 0-32 448 0 0 32 96 0 0-256-64 0-32 0 0 32 0 64 0 32-32 0-384 0-32 0 0-32 0-64 0-32-32 0z" />
    </Icon>
);

export default Couch;