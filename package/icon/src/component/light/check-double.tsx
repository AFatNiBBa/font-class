
import { Icon } from "../../index";

/**
 * A component that renders the `check-double` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-double?s=light check-double}
 * @preview ![check-double](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/check-double.svg)
 */
const CheckDouble: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M331.3 75.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L160 201.4 91.3 132.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0l160-160zm112 112c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L160 425.4 27.3 292.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l144 144c6.2 6.2 16.4 6.2 22.6 0l272-272z" />
    </Icon>
);

export default CheckDouble;