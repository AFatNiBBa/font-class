
import { Icon } from "../../index";

/**
 * A component that renders the `salt-shaker` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/salt-shaker?s=sharp-light salt-shaker}
 * @preview ![salt-shaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/salt-shaker.svg)
 */
const SaltShaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M379 480l5 32-32.4 0L32.4 512 0 512l5-32L62.7 110.7C72.7 47 127.5 0 192 0s119.3 47 129.3 110.7L379 480zM301.6 192L82.4 192l-45 288 309.2 0-45-288zm-5-32l-6.9-44.4C282.2 67.5 240.7 32 192 32s-90.2 35.5-97.7 83.6L87.4 160l209.2 0zM176 64a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM144 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm38.1 128l28 224-32.2 0-28-224 32.2 0zm-108 0l-28 224-32.2 0 28-224 32.2 0z" />
    </Icon>
);

export default SaltShaker;