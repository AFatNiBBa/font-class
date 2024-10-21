
import { Icon } from "../../index";

/**
 * A component that renders the `check-double` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-double?s=sharp-regular check-double}
 * @preview ![check-double](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/check-double.svg)
 */
const CheckDouble: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M337 81l17-17L320 30.1 303 47l-143 143L97 127l-17-17L46.1 144l17 17 80 80 17 17 17-17L337 81zm94 130L448 194l-33.9-34-17 16.9L160.6 412.3 50.8 303.1l-17-16.9L0 320.2l17 16.9L143.7 463.2l16.9 16.9 16.9-16.9L431 211z" />
    </Icon>
);

export default CheckDouble;