
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up?s=sharp-regular circle-arrow-up}
 * @preview ![circle-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQ4YTIwOCAyMDggMCAxIDEgMCA0MTYgMjA4IDIwOCAwIDEgMSAwLTQxNnptMCA0NjRBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyem0xNy0zOTNsLTE3LTE3LTE3IDE3LTg4IDg4LTE3IDE3TDE2OCAyNTcuOWwxNy0xNyA0Ny00N0wyMzIgMzc2bDAgMjQgNDggMCAwLTI0IDAtMTgyLjEgNDcgNDcgMTcgMTdMMzc3LjkgMjI0bC0xNy0xNy04OC04OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm17-393l-17-17-17 17-88 88-17 17L168 257.9l17-17 47-47L232 376l0 24 48 0 0-24 0-182.1 47 47 17 17L377.9 224l-17-17-88-88z" />
    </Icon>
);

export default CircleArrowUp;