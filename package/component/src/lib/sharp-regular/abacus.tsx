
import { Icon } from "../../index";

/**
 * A component that renders the `abacus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/abacus?s=sharp-regular abacus}
 * @preview ![abacus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/abacus.svg)
 */
const Abacus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 80l0 128-80 0 0-32 8 0 24 0 0-48-24 0-8 0 0-48 80 0zM416 128l-8 0-24 0 0 48 24 0 8 0 0 32-128 0 0-32 8 0 24 0 0-48-24 0-8 0 0-48 128 0 0 48zm-160 0l-8 0-24 0 0 48 24 0 8 0 0 32-96 0 0-32 8 0 24 0 0-48-24 0-8 0 0-48 96 0 0 48zm-128 0l-8 0-24 0 0 48 24 0 8 0 0 32-80 0L48 80l80 0 0 48zM48 432l0-192 80 0 0 24-8 0-24 0 0 48 24 0 8 0 0 24-8 0-24 0 0 48 24 0 8 0 0 48-80 0zm112-48l8 0 24 0 0-48-24 0-8 0 0-24 8 0 24 0 0-48-24 0-8 0 0-24 96 0 0 24-8 0-24 0 0 48 24 0 8 0 0 24-8 0-24 0 0 48 24 0 8 0 0 48-96 0 0-48zm128-72l8 0 24 0 0-48-24 0-8 0 0-24 128 0 0 96-8 0-24 0 0 48 24 0 8 0 0 48-128 0 0-48 8 0 24 0 0-48-24 0-8 0 0-24zm160 72l8 0 24 0 0-48-24 0-8 0 0-96 80 0 0 192-80 0 0-48zM48 32L0 32 0 80 0 432l0 48 48 0 480 0 48 0 0-48 0-352 0-48-48 0L48 32z" />
    </Icon>
);

export default Abacus;