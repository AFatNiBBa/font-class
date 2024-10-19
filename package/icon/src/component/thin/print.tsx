
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `print` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/print?s=thin print}
 * @preview ![print](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04OCAxNjBDOTIuNDA2IDE2MCA5NiAxNTYuNDIyIDk2IDE1MlY0MEM5NiAyNi43NjYgMTA2Ljc4MSAxNiAxMjAgMTZIMzQ2Ljc1QzM1My4wNjIgMTYgMzU5LjI1IDE4LjU2MiAzNjMuNzE5IDIzLjAzMUw0MDguOTY5IDY4LjI4MUM0MTMuNDM4IDcyLjc1IDQxNiA3OC45MzggNDE2IDg1LjI1VjE1MkM0MTYgMTU2LjQyMiA0MTkuNTk0IDE2MCA0MjQgMTYwUzQzMiAxNTYuNDIyIDQzMiAxNTJWODUuMjVDNDMyIDc0LjU2MiA0MjcuODQ0IDY0LjUzMSA0MjAuMjgxIDU2Ljk2OUwzNzUuMDMxIDExLjcxOUMzNjcuNTk0IDQuMjY2IDM1Ny4yODEgMCAzNDYuNzUgMEgxMjBDOTcuOTM4IDAgODAgMTcuOTM4IDgwIDQwVjE1MkM4MCAxNTYuNDIyIDgzLjU5NCAxNjAgODggMTYwWk00NDggMTkySDY0QzI4LjY1MiAxOTIgMCAyMjAuNjUyIDAgMjU2VjM1MkMwIDM2OS42NzIgMTQuMzI4IDM4NCAzMiAzODRIODBWNDg4QzgwIDUwMS4yMzQgOTAuNzgxIDUxMiAxMDQgNTEySDQwOEM0MjEuMjE5IDUxMiA0MzIgNTAxLjIzNCA0MzIgNDg4VjM4NEg0ODBDNDk3LjY3MiAzODQgNTEyIDM2OS42NzIgNTEyIDM1MlYyNTZDNTEyIDIyMC42NTIgNDgzLjM0OCAxOTIgNDQ4IDE5MlpNNDE2IDQ4OEM0MTYgNDkyLjQwNiA0MTIuNDA2IDQ5NiA0MDggNDk2SDEwNEM5OS41OTQgNDk2IDk2IDQ5Mi40MDYgOTYgNDg4VjM0NEM5NiAzMzkuNTk0IDk5LjU5NCAzMzYgMTA0IDMzNkg0MDhDNDEyLjQwNiAzMzYgNDE2IDMzOS41OTQgNDE2IDM0NFY0ODhaTTQ5NiAzNTJDNDk2IDM2MC44MjIgNDg4LjgyNCAzNjggNDgwIDM2OEg0MzJWMzQ0QzQzMiAzMzAuNzY2IDQyMS4yMTkgMzIwIDQwOCAzMjBIMTA0QzkwLjc4MSAzMjAgODAgMzMwLjc2NiA4MCAzNDRWMzY4SDMyQzIzLjE3NiAzNjggMTYgMzYwLjgyMiAxNiAzNTJWMjU2QzE2IDIyOS41MzMgMzcuNTMxIDIwOCA2NCAyMDhINDQ4QzQ3NC40NjkgMjA4IDQ5NiAyMjkuNTMzIDQ5NiAyNTZWMzUyWk00MzIgMjU2QzQyMy4xNzYgMjU2IDQxNiAyNjMuMTc4IDQxNiAyNzJTNDIzLjE3NiAyODggNDMyIDI4OFM0NDggMjgwLjgyMiA0NDggMjcyUzQ0MC44MjQgMjU2IDQzMiAyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Print(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M88 160C92.406 160 96 156.422 96 152V40C96 26.766 106.781 16 120 16H346.75C353.062 16 359.25 18.562 363.719 23.031L408.969 68.281C413.438 72.75 416 78.938 416 85.25V152C416 156.422 419.594 160 424 160S432 156.422 432 152V85.25C432 74.562 427.844 64.531 420.281 56.969L375.031 11.719C367.594 4.266 357.281 0 346.75 0H120C97.938 0 80 17.938 80 40V152C80 156.422 83.594 160 88 160ZM448 192H64C28.652 192 0 220.652 0 256V352C0 369.672 14.328 384 32 384H80V488C80 501.234 90.781 512 104 512H408C421.219 512 432 501.234 432 488V384H480C497.672 384 512 369.672 512 352V256C512 220.652 483.348 192 448 192ZM416 488C416 492.406 412.406 496 408 496H104C99.594 496 96 492.406 96 488V344C96 339.594 99.594 336 104 336H408C412.406 336 416 339.594 416 344V488ZM496 352C496 360.822 488.824 368 480 368H432V344C432 330.766 421.219 320 408 320H104C90.781 320 80 330.766 80 344V368H32C23.176 368 16 360.822 16 352V256C16 229.533 37.531 208 64 208H448C474.469 208 496 229.533 496 256V352ZM432 256C423.176 256 416 263.178 416 272S423.176 288 432 288S448 280.822 448 272S440.824 256 432 256Z" />
        </Icon>
    </>
}