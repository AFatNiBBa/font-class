
import { Icon } from "../../index";

/**
 * A component that renders the `cheese` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=sharp-regular cheese}
 * @preview ![cheese](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMzA0bDAgMTI4IDQxNiAwIDAtMTI4TDQ4IDMwNHptNDE2LTQ4YzAtOTEuOS03MC41LTE2Ny40LTE2MC40LTE3NS4zTDc4LjIgMjU2IDQ2NCAyNTZ6TTAgMjU2TDI4OCAzMmMxMjMuNyAwIDIyNCAxMDAuMyAyMjQgMjI0bDAgMTc2IDAgNDgtNDggMEw0OCA0ODAgMCA0ODBsMC00OEwwIDI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 304l0 128 416 0 0-128L48 304zm416-48c0-91.9-70.5-167.4-160.4-175.3L78.2 256 464 256zM0 256L288 32c123.7 0 224 100.3 224 224l0 176 0 48-48 0L48 480 0 480l0-48L0 256z" />
    </Icon>
);

export default Cheese;