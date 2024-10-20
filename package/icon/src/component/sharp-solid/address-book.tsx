
import { Icon } from "../../index";

/**
 * A component that renders the `address-book` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-book?s=sharp-solid address-book}
 * @preview ![address-book](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/address-book.svg)
 */
const AddressBook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 0L32 0l0 512 416 0L448 0zM320 288l32 96-224 0 32-96 160 0zM176 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64zm0 112l-32 0 0 16 0 64 0 16 32 0 0-16 0-64 0-16zm0 144l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64z" />
    </Icon>
);

export default AddressBook;