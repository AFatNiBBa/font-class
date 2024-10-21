
import { Icon } from "../../index";

/**
 * A component that renders the `hospitals` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hospitals?s=sharp-light hospitals}
 * @preview ![hospitals](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hospitals.svg)
 */
const Hospitals: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 32L288 32l0 32-32 0 0-32 0-32 32 0L544 0l32 0 0 32 0 448 0 32-32 0-224 0 0-32 224 0 0-64-224 0 0-32 224 0 0-64-224 0 0-32 224 0 0-256zM448 80l0 48 48 0 0 32-48 0 0 48-32 0 0-48-48 0 0-32 48 0 0-48 32 0zM256 128L32 128l0 224 224 0 0-224zM32 480l224 0 0-96L32 384l0 96zm96-304l32 0 0 48 48 0 0 32-48 0 0 48-32 0 0-48-48 0 0-32 48 0 0-48zM32 96l224 0 32 0 0 32 0 352 0 32-32 0L32 512 0 512l0-32L0 128 0 96l32 0z" />
    </Icon>
);

export default Hospitals;