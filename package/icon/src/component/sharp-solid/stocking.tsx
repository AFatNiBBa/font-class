
import { Icon } from "../../index";

/**
 * A component that renders the `stocking` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stocking?s=sharp-solid stocking}
 * @preview ![stocking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDBMNjQgMGwwIDk2IDMyMCAwIDAtOTZ6TTk2IDEyOGwwIDEyOEw1NS43IDI4Mi45QzIwLjkgMzA2LjEgMCAzNDUuMSAwIDM4Ni45bDAgMi4yQzAgNDU3IDU1IDUxMiAxMjIuOCA1MTJjMjQuMiAwIDQ4LTcuMiA2OC4xLTIwLjZMMzUyIDM4NGwwLTI1Nkw5NiAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Stocking: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 0L64 0l0 96 320 0 0-96zM96 128l0 128L55.7 282.9C20.9 306.1 0 345.1 0 386.9l0 2.2C0 457 55 512 122.8 512c24.2 0 48-7.2 68.1-20.6L352 384l0-256L96 128z" />
    </Icon>
);

export default Stocking;