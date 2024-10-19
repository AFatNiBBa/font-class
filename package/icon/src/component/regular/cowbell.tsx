
import { Icon } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=regular cowbell}
 * @preview ![cowbell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTc2IDQ4bDk2IDAgMCA0OC05NiAwIDAtNDh6bS00OC04bDAgNTYtMTYgMGMtMjEuNCAwLTQwLjMgMTQuMi00Ni4yIDM0LjhsLTY0IDIyNGMtNC4xIDE0LjUtMS4yIDMwLjEgNy44IDQyLjFTMzIuOSA0MTYgNDggNDE2bDM1MiAwYzE1LjEgMCAyOS4zLTcuMSAzOC4zLTE5LjFzMTItMjcuNiA3LjgtNDIuMWwtNjQtMjI0QzM3Ni4zIDExMC4yIDM1Ny40IDk2IDMzNiA5NmwtMTYgMCAwLTU2YzAtMjIuMS0xNy45LTQwLTQwLTQwTDE2OCAwYy0yMi4xIDAtNDAgMTcuOS00MCA0MHpNMTEyIDE0NGwyMjQgMCA2NCAyMjRMNDggMzY4bDY0LTIyNHpNMjg4IDQ0OGwtMTI4IDBjMCAzNS4zIDI4LjcgNjQgNjQgNjRzNjQtMjguNyA2NC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cowbell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176 48l96 0 0 48-96 0 0-48zm-48-8l0 56-16 0c-21.4 0-40.3 14.2-46.2 34.8l-64 224c-4.1 14.5-1.2 30.1 7.8 42.1S32.9 416 48 416l352 0c15.1 0 29.3-7.1 38.3-19.1s12-27.6 7.8-42.1l-64-224C376.3 110.2 357.4 96 336 96l-16 0 0-56c0-22.1-17.9-40-40-40L168 0c-22.1 0-40 17.9-40 40zM112 144l224 0 64 224L48 368l64-224zM288 448l-128 0c0 35.3 28.7 64 64 64s64-28.7 64-64z" />
    </Icon>
);

export default Cowbell;