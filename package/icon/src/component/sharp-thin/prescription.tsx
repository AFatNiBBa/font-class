
import { Icon } from "../../index";

/**
 * A component that renders the `prescription` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription?s=sharp-thin prescription}
 * @preview ![prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/prescription.svg)
 */
const Prescription: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M8 0L0 0 0 8 0 216l0 96 0 8 16 0 0-8 0-88 132.7 0 128 128L130.3 498.3l11.3 11.3L288 363.3 434.3 509.7l11.3-11.3L299.3 352 445.7 205.7l-11.3-11.3L288 340.7 171.3 224l4.7 0c61.9 0 112-50.1 112-112S237.9 0 176 0L8 0zM176 208L16 208 16 16l160 0c53 0 96 43 96 96s-43 96-96 96z" />
    </Icon>
);

export default Prescription;