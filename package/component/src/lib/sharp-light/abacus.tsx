
import { Icon } from "../../index";

/**
 * A component that renders the `abacus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/abacus?s=sharp-light abacus}
 * @preview ![abacus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/abacus.svg)
 */
const Abacus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 64l0 128-96 0 0-32 16 0 16 0 0-32-16 0-16 0 0-64 96 0zM416 128l-16 0-16 0 0 32 16 0 16 0 0 32-128 0 0-32 16 0 16 0 0-32-16 0-16 0 0-64 128 0 0 64zm-160 0l-16 0-16 0 0 32 16 0 16 0 0 32-96 0 0-32 16 0 16 0 0-32-16 0-16 0 0-64 96 0 0 64zm-128 0l-16 0-16 0 0 32 16 0 16 0 0 32-96 0L32 64l96 0 0 64zM32 448l0-224 96 0 0 64-16 0-16 0 0 32 16 0 16 0 0 32-16 0-16 0 0 32 16 0 16 0 0 64-96 0zm128-64l16 0 16 0 0-32-16 0-16 0 0-32 16 0 16 0 0-32-16 0-16 0 0-64 96 0 0 64-16 0-16 0 0 32 16 0 16 0 0 32-16 0-16 0 0 32 16 0 16 0 0 64-96 0 0-64zm128-64l16 0 16 0 0-32-16 0-16 0 0-64 128 0 0 128-16 0-16 0 0 32 16 0 16 0 0 64-128 0 0-64 16 0 16 0 0-32-16 0-16 0 0-32zm160 64l16 0 16 0 0-32-16 0-16 0 0-128 96 0 0 224-96 0 0-64zM32 32L0 32 0 64 0 448l0 32 32 0 512 0 32 0 0-32 0-384 0-32-32 0L32 32z" />
    </Icon>
);

export default Abacus;