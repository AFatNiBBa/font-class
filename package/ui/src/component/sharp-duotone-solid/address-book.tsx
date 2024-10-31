
import { Icon, generic } from "../../index";

/**
 * A component that renders the `address-book` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-book?s=sharp-duotone-solid address-book}
 * @preview ![address-book](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/address-book.svg)
 */
const AddressBook: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 0L448 0l0 512L32 512 32 0zm96 384l224 0-32-96-160 0-32 96zm48-192a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M512 64l-32 0 0 16 0 64 0 16 32 0 0-16 0-64 0-16zm0 128l-32 0 0 16 0 64 0 16 32 0 0-16 0-64 0-16zm0 144l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64zM320 288l-160 0-32 96 224 0-32-96zm-80-32a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default AddressBook;