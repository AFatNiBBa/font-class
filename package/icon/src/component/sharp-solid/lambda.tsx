
import { Icon } from "../../index";

/**
 * A component that renders the `lambda` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lambda?s=sharp-solid lambda}
 * @preview ![lambda](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/lambda.svg)
 */
const Lambda: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32L0 32 0 96l32 0 108.2 0 16.4 32.9L2.2 480l69.9 0L193.8 203.3 323.4 462.3l8.8 17.7 19.8 0 64 0 32 0 0-64-32 0-44.2 0L188.6 49.7 179.8 32 160 32 32 32z" />
    </Icon>
);

export default Lambda;