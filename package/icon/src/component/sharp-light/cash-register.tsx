
import { Icon } from "../../index";

/**
 * A component that renders the `cash-register` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cash-register?s=sharp-light cash-register}
 * @preview ![cash-register](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cash-register.svg)
 */
const CashRegister: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32l0 64 224 0 0-64L64 32zM32 0L64 0 288 0l32 0 0 32 0 64 0 32-32 0-96 0 0 32 288 0 32 224 0 96 0 32-32 0L32 512 0 512l0-32 0-96L32 160l128 0 0-32-96 0-32 0 0-32 0-64L32 0zM480 480l0-64L32 416l0 64 448 0zM452.2 192L59.8 192 32.3 384l447.3 0L452.2 192zM136 224l0 48-48 0 0-48 48 0zm48 0l48 0 0 48-48 0 0-48zm0 128l-48 0 0-48 48 0 0 48zm96-128l48 0 0 48-48 0 0-48zm0 80l0 48-48 0 0-48 48 0zm96-80l48 0 0 48-48 0 0-48zm0 80l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default CashRegister;