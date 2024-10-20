
import { Icon } from "../../index";

/**
 * A component that renders the `check-double` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-double?s=thin check-double}
 * @preview ![check-double](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/check-double.svg)
 */
const CheckDouble: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M325.7 69.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L160 212.7 85.7 138.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l80 80c3.1 3.1 8.2 3.1 11.3 0l160-160zm112 112c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L160 436.7 21.7 298.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l144 144c3.1 3.1 8.2 3.1 11.3 0l272-272z" />
    </Icon>
);

export default CheckDouble;