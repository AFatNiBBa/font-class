
import { Icon } from "../../index";

/**
 * A component that renders the `square-root` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-root?s=sharp-regular square-root}
 * @preview ![square-root](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-root.svg)
 */
const SquareRoot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 32l-18.2 0-4.9 17.5-96 342.7L117.1 236.6 110.3 224 96 224l-72 0L0 224l0 48 24 0 57.7 0L186.9 467.4l6.8 12.6 32.5 0 4.9-17.5L338.2 80 552 80l24 0 0-48-24 0L320 32z" />
    </Icon>
);

export default SquareRoot;