
import { Icon } from "../../index";

/**
 * A component that renders the `address-book` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-book?s=sharp-regular address-book}
 * @preview ![address-book](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/address-book.svg)
 */
const AddressBook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 48l0 416L80 464 80 48l320 0zM80 0L32 0l0 48 0 416 0 48 48 0 320 0 48 0 0-48 0-416 0-48L400 0 80 0zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM128 384l224 0-32-96-160 0-32 96zM512 80l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64zm0 112l-32 0 0 16 0 64 0 16 32 0 0-16 0-64 0-16zm0 144l0-16-32 0 0 16 0 64 0 16 32 0 0-16 0-64z" />
    </Icon>
);

export default AddressBook;