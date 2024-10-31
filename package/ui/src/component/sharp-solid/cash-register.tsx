
import { Icon } from "../../index";

/**
 * A component that renders the `cash-register` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cash-register?s=sharp-solid cash-register}
 * @preview ![cash-register](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cash-register.svg)
 */
const CashRegister: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 0L32 0l0 128 112 0 0 32L32 160 0 371.2 0 512l512 0 0-140.8L480 160l-272 0 0-32 112 0L320 0zM96 48l160 0 16 0 0 32-16 0L96 80 80 80l0-32 16 0zM64 416l16 0 352 0 16 0 0 32-16 0L80 448l-16 0 0-32zm72-200l0 48-48 0 0-48 48 0zm48 48l0-48 48 0 0 48-48 0zm0 32l0 48-48 0 0-48 48 0zm96-80l48 0 0 48-48 0 0-48zm-48 80l48 0 0 48-48 0 0-48zm144-80l48 0 0 48-48 0 0-48zm0 80l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default CashRegister;