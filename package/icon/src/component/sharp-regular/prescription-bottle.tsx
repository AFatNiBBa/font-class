
import { Icon } from "../../index";

/**
 * A component that renders the `prescription-bottle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription-bottle?s=sharp-regular prescription-bottle}
 * @preview ![prescription-bottle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/prescription-bottle.svg)
 */
const PrescriptionBottle: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 48l0 32L48 80l0-32 288 0zM48 0L0 0 0 48 0 80l0 48 48 0 288 0 48 0 0-48 0-32 0-48L336 0 48 0zM32 160l0 304 0 48 48 0 224 0 48 0 0-48 0-304-48 0 0 304L80 464l0-48 56 0 24 0 0-48-24 0-56 0 0-48 56 0 24 0 0-48-24 0-56 0 0-48 56 0 24 0 0-48-24 0-56 0 0-16-48 0z" />
    </Icon>
);

export default PrescriptionBottle;