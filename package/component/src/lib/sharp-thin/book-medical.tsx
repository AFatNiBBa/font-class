
import { Icon } from "../../index";

/**
 * A component that renders the `book-medical` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-medical?s=sharp-thin book-medical}
 * @preview ![book-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/book-medical.svg)
 */
const BookMedical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 56C0 25.1 25.1 0 56 0L440 0l8 0 0 8 0 400 0 8-8 0-24 0 0 80 24 0 8 0 0 16-8 0L56 512c-30.9 0-56-25.1-56-56L0 56zM56 416c-22.1 0-40 17.9-40 40s17.9 40 40 40l344 0 0-80L56 416zm-40 .8C26.2 406.4 40.3 400 56 400l376 0 0-384L56 16C33.9 16 16 33.9 16 56l0 360.8zM200 96l64 0 8 0 0 8 0 64 64 0 8 0 0 8 0 64 0 8-8 0-64 0 0 64 0 8-8 0-64 0-8 0 0-8 0-64-64 0-8 0 0-8 0-64 0-8 8 0 64 0 0-64 0-8 8 0zm8 80l0 8-8 0-64 0 0 48 64 0 8 0 0 8 0 64 48 0 0-64 0-8 8 0 64 0 0-48-64 0-8 0 0-8 0-64-48 0 0 64z" />
    </Icon>
);

export default BookMedical;