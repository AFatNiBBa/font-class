
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cash-register` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cash-register?s=sharp-duotone-solid cash-register}
 * @preview ![cash-register](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cash-register.svg)
 */
const CashRegister: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 0l0 128 112 0 0 32 64 0 0-32 112 0L320 0 32 0zM80 48l16 0 160 0 16 0 0 32-16 0L96 80 80 80l0-32zm8 168l0 48 48 0 0-48-48 0zm48 80l0 48 48 0 0-48-48 0zm48-80l0 48 48 0 0-48-48 0zm48 80l0 48 48 0 0-48-48 0zm48-80l0 48 48 0 0-48-48 0zm48 80l0 48 48 0 0-48-48 0zm48-80l0 48 48 0 0-48-48 0z" />
        <path d="M0 512L0 371.2 32 160l448 0 32 211.2L512 512 0 512zm64-96l0 32 16 0 352 0 16 0 0-32-16 0L80 416l-16 0zm72-200l-48 0 0 48 48 0 0-48zm48 0l0 48 48 0 0-48-48 0zm0 80l-48 0 0 48 48 0 0-48zm96-80l0 48 48 0 0-48-48 0zm0 80l-48 0 0 48 48 0 0-48zm96-80l0 48 48 0 0-48-48 0zm0 80l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default CashRegister;