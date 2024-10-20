
import { Icon } from "../../index";

/**
 * A component that renders the `check-double` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-double?s=sharp-solid check-double}
 * @preview ![check-double](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/check-double.svg)
 */
const CheckDouble: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M342.6 86.6L365.3 64 320 18.7 297.4 41.4 160 178.7l-57.4-57.4L80 98.7 34.7 144l22.6 22.6 80 80L160 269.3l22.6-22.6 160-160zm82.1 141.8l23.2-22-44-46.5-23.2 22L159 392 67.2 305.1 44 283.1 0 329.6l23.2 22L137 459.3l22 20.8 22-20.8L424.7 228.5z" />
    </Icon>
);

export default CheckDouble;