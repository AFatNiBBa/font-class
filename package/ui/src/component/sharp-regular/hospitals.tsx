
import { Icon } from "../../index";

/**
 * A component that renders the `hospitals` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hospitals?s=sharp-regular hospitals}
 * @preview ![hospitals](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hospitals.svg)
 */
const Hospitals: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304 48l224 0 0 208-208 0 0 48 208 0 0 48-208 0 0 48 208 0 0 64-208 0 0 48 208 0 48 0 0-48 0-416 0-48L528 0 304 0 256 0l0 48 0 16 48 0 0-16zM408 80l0 40-40 0 0 48 40 0 0 40 48 0 0-40 40 0 0-48-40 0 0-40-48 0zM168 176l-48 0 0 40-40 0 0 48 40 0 0 40 48 0 0-40 40 0 0-48-40 0 0-40zM48 144l192 0 0 208L48 352l0-208zm0 256l192 0 0 64L48 464l0-64zM0 96l0 48L0 464l0 48 48 0 192 0 48 0 0-48 0-320 0-48-48 0L48 96 0 96z" />
    </Icon>
);

export default Hospitals;