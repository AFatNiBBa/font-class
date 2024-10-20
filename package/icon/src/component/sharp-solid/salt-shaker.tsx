
import { Icon } from "../../index";

/**
 * A component that renders the `salt-shaker` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/salt-shaker?s=sharp-solid salt-shaker}
 * @preview ![salt-shaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/salt-shaker.svg)
 */
const SaltShaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 512l-8-64L335.9 127C326.8 54.5 265.1 0 192 0S57.2 54.5 48.1 127L8 448 0 512l64.5 0 255 0 64.5 0zm-72.5-64l-239 0 32-256 175 0 32 256zM192 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM128 96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM240 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default SaltShaker;