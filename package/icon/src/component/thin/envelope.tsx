
import { Icon } from "../../index";

/**
 * A component that renders the `envelope` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=thin envelope}
 * @preview ![envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgODBjLTI2LjUgMC00OCAyMS41LTQ4IDQ4bDAgMjguMkwyMjAuOCAzMjEuNGMyMC41IDE2LjUgNDkuOCAxNi41IDcwLjMgMEw0OTYgMTU2LjJsMC0yOC4yYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4TDY0IDgwek0xNiAxNzYuN0wxNiAzODRjMCAyNi41IDIxLjUgNDggNDggNDhsMzg0IDBjMjYuNSAwIDQ4LTIxLjUgNDgtNDhsMC0yMDcuM0wzMDEuMiAzMzMuOGMtMjYuNCAyMS4zLTY0IDIxLjMtOTAuNCAwTDE2IDE3Ni43ek0wIDEyOEMwIDkyLjcgMjguNyA2NCA2NCA2NGwzODQgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDI1NmMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCA0NDhjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 80c-26.5 0-48 21.5-48 48l0 28.2L220.8 321.4c20.5 16.5 49.8 16.5 70.3 0L496 156.2l0-28.2c0-26.5-21.5-48-48-48L64 80zM16 176.7L16 384c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-207.3L301.2 333.8c-26.4 21.3-64 21.3-90.4 0L16 176.7zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
    </Icon>
);

export default Envelope;