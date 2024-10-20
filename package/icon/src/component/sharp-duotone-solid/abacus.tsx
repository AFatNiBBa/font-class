
import { Icon, generic } from "../../index";

/**
 * A component that renders the `abacus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/abacus?s=sharp-duotone-solid abacus}
 * @preview ![abacus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/abacus.svg)
 */
const Abacus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96 0 416l0 64 64 0 448 0 64 0 0-64 0-320 0-64-64 0L64 32 0 32zM64 96l64 0 0 32 32 0 0-32 96 0 0 32 32 0 0-32 128 0 0 32 32 0 0-32 64 0 0 112-64 0 0-32-32 0 0 32-128 0 0-32-32 0 0 32-96 0 0-32-32 0 0 32-64 0L64 96zm0 144l64 0 0 24 32 0 0-24 96 0 0 24 32 0 0-24 128 0 0 96 32 0 0-96 64 0 0 176-64 0 0-32-32 0 0 32-128 0 0-32-32 0 0 32-96 0 0-32-32 0 0 32-64 0 0-176zm64 72l0 24 32 0 0-24-32 0zm128 0l0 24 32 0 0-24-32 0z" />
        <path d="M96 128l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48zm128 0l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48zm160 0l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48zM96 264l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48zm128 0l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48zM96 336l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48zm128 0l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48zm160 0l24 0 48 0 24 0 0 48-24 0-48 0-24 0 0-48z" />
    </Icon>
);

export default Abacus;