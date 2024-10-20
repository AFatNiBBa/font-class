
import { Icon } from "../../index";

/**
 * A component that renders the `salt-shaker` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/salt-shaker?s=sharp-regular salt-shaker}
 * @preview ![salt-shaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/salt-shaker.svg)
 */
const SaltShaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 512l-7.5-48L321.3 110.7C311.3 47 256.5 0 192 0S72.7 47 62.7 110.7L7.5 464 0 512l48.6 0 286.8 0 48.6 0zm-56.1-48L56.1 464 98.6 192l186.8 0 42.5 272zM192 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM128 96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM240 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default SaltShaker;