
import { Icon } from "../../index";

/**
 * A component that renders the `skull-cow` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull-cow?s=sharp-light skull-cow}
 * @preview ![skull-cow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjEgMjQuNmwtLjUgMS4zczAgMCAwIDBDNTQuOCA0Mi4yIDQ3LjggNjEuNyA0OS40IDc3LjdDNTIuMyAxMDYuMyA3Ni4zIDEyOCAxMDUgMTI4bDU1IDAgMC0zMiAzMiAwIDI1NiAwIDMyIDAgMCAzMiA1NSAwYzI4LjcgMCA1Mi43LTIxLjcgNTUuNi01MC4zYzEuNi0xNi01LjMtMzUuNS0xMS4xLTUxLjhsLS41LTEuM2MtLjctMi4xLTEuNC00LjEtMi4xLTZjLS4zLS45LS42LTEuNy0uOS0yLjVMNjAwIDBjMS43IDIuMSAzLjMgNC4yIDQuOSA2LjRjLjggMS4xIDEuNiAyLjEgMi40IDMuMkM2MjUuMiAzNC40IDY0MCA2NSA2NDAgOTUuNUM2NDAgMTgyLjEgNTgyLjggMjQwIDUxMiAyNDBsLTMyIDAgMCAxMTIgMCAzMi0zMiAwLTMzLjYgMEwzNzYgNTEybC0xMTIgMEwyMjUuNiAzODQgMTkyIDM4NGwtMzIgMCAwLTMyIDAtMTEyLTMyIDBDNTcuMiAyNDAgMCAxODIuMSAwIDk1LjVDMCA2NSAxNC44IDM0LjQgMzIuNyA5LjZjLjgtMS4xIDEuNi0yLjIgMi40LTMuMkMzNi43IDQuMiAzOC4zIDIuMSA0MCAwTDY0IDE2Yy0uMyAuOC0uNiAxLjctLjkgMi41Yy0uNyAyLTEuNCA0LTIuMSA2ek00NDggMjQwbDAtMzEuNyAwLTgwLjMtMjU2IDAgMCA4MC4zIDAgMzEuNyAwIDExMiAzMy42IDAgMjMuOCAwIDYuOCAyMi44TDI4Ny44IDQ4MGw2NC40IDAgMzEuNi0xMDUuMiA2LjgtMjIuOCAyMy44IDAgMzMuNiAwIDAtMTEyem0zMi0zMS43bDMyIDBjNDMuNiAwIDgzLjUtMzAuNCA5My44LTg0LjdjLTE2IDIyLTQxLjkgMzYuMS03MC44IDM2LjFsLTU1IDAgMCA0OC42ek0xMDUgMTU5LjdzMCAwIDAgMGMtMjguOSAwLTU0LjgtMTQuMS03MC44LTM2LjFjMTAuMiA1NC4zIDUwLjEgODQuNyA5My44IDg0LjdsMzIgMCAwLTQ4LjYtNTUgMHpNMjMyIDI1NmEyNCAyNCAwIDEgMSA0OCAwIDI0IDI0IDAgMSAxIC00OCAwem0xNTItMjRhMjQgMjQgMCAxIDEgMCA0OCAyNCAyNCAwIDEgMSAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SkullCow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M61 24.6l-.5 1.3s0 0 0 0C54.8 42.2 47.8 61.7 49.4 77.7C52.3 106.3 76.3 128 105 128l55 0 0-32 32 0 256 0 32 0 0 32 55 0c28.7 0 52.7-21.7 55.6-50.3c1.6-16-5.3-35.5-11.1-51.8l-.5-1.3c-.7-2.1-1.4-4.1-2.1-6c-.3-.9-.6-1.7-.9-2.5L600 0c1.7 2.1 3.3 4.2 4.9 6.4c.8 1.1 1.6 2.1 2.4 3.2C625.2 34.4 640 65 640 95.5C640 182.1 582.8 240 512 240l-32 0 0 112 0 32-32 0-33.6 0L376 512l-112 0L225.6 384 192 384l-32 0 0-32 0-112-32 0C57.2 240 0 182.1 0 95.5C0 65 14.8 34.4 32.7 9.6c.8-1.1 1.6-2.2 2.4-3.2C36.7 4.2 38.3 2.1 40 0L64 16c-.3 .8-.6 1.7-.9 2.5c-.7 2-1.4 4-2.1 6zM448 240l0-31.7 0-80.3-256 0 0 80.3 0 31.7 0 112 33.6 0 23.8 0 6.8 22.8L287.8 480l64.4 0 31.6-105.2 6.8-22.8 23.8 0 33.6 0 0-112zm32-31.7l32 0c43.6 0 83.5-30.4 93.8-84.7c-16 22-41.9 36.1-70.8 36.1l-55 0 0 48.6zM105 159.7s0 0 0 0c-28.9 0-54.8-14.1-70.8-36.1c10.2 54.3 50.1 84.7 93.8 84.7l32 0 0-48.6-55 0zM232 256a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm152-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default SkullCow;