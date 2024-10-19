
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wind-turbine` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-turbine?s=duotone wind-turbine}
 * @preview ![wind-turbine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggNDg4YzAgMTMuMyAxMC43IDI0IDI0IDI0bDIwOCAwYzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0bC03MiAwIDAtOTQuM2MtMjEuMy0zNC43LTQyLjctNjkuMy02NC0xMDRMMjI0IDQ2NGwtNzIgMGMtMTMuMyAwLTI0IDEwLjctMjQgMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNDUuMiA0MDQuMWMyLjUgMTcuMi0yMC4zIDI1LjUtMjkuNSAxMC43TDIxNCAyNDkuNGMtMS44LTIuOS00LjUtNS4yLTcuNy02LjVMMjUuNyAxNzEuNEM5LjUgMTY1IDEzLjcgMTQxIDMxLjEgMTQwLjZsMTk0LjEtNS40YzMuNS0uMSA2LjgtMS4zIDkuNS0zLjVMMzg3IDExYzEzLjYtMTAuOCAzMi4zIDQuOCAyNCAyMC4xTDMxOC42IDIwMmMtMS42IDMtMi4zIDYuNS0xLjggOS45bDI4LjQgMTkyLjF6TTI1NiAyMTZhMjQgMjQgMCAxIDAgMC00OCAyNCAyNCAwIDEgMCAwIDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const WindTurbine: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 488c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0 0-94.3c-21.3-34.7-42.7-69.3-64-104L224 464l-72 0c-13.3 0-24 10.7-24 24z" />
            <path d="M345.2 404.1c2.5 17.2-20.3 25.5-29.5 10.7L214 249.4c-1.8-2.9-4.5-5.2-7.7-6.5L25.7 171.4C9.5 165 13.7 141 31.1 140.6l194.1-5.4c3.5-.1 6.8-1.3 9.5-3.5L387 11c13.6-10.8 32.3 4.8 24 20.1L318.6 202c-1.6 3-2.3 6.5-1.8 9.9l28.4 192.1zM256 216a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default WindTurbine;