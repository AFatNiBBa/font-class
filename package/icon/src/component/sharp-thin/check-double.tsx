
import { Icon } from "../../index";

/**
 * A component that renders the `check-double` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-double?s=sharp-thin check-double}
 * @preview ![check-double](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/check-double.svg)
 */
const CheckDouble: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M325.7 69.7l5.7-5.7L320 52.7l-5.7 5.7L160 212.7 85.7 138.3 80 132.7 68.7 144l5.7 5.7 80 80 5.7 5.7 5.7-5.7 160-160zm112 112l5.7-5.7L432 164.7l-5.7 5.7L160 436.7 21.7 298.3 16 292.7 4.7 304l5.7 5.7 144 144 5.7 5.7 5.7-5.7 272-272z" />
    </Icon>
);

export default CheckDouble;