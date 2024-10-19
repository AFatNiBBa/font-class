
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-u` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-u?s=regular circle-u}
 * @preview ![circle-u](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDQgMTQ0QzMzMC43NSAxNDQgMzIwIDE1NC43NSAzMjAgMTY4VjI5MC45MDZDMzIwIDMyNC41OTQgMjkxLjI5NyAzNTIgMjU2IDM1MlMxOTIgMzI0LjU5NCAxOTIgMjkwLjkwNlYxNjhDMTkyIDE1NC43NSAxODEuMjUgMTQ0IDE2OCAxNDRTMTQ0IDE1NC43NSAxNDQgMTY4VjI5MC45MDZDMTQ0IDM1MS4wNjIgMTk0LjI1IDQwMCAyNTYgNDAwUzM2OCAzNTEuMDYyIDM2OCAyOTAuOTA2VjE2OEMzNjggMTU0Ljc1IDM1Ny4yNSAxNDQgMzQ0IDE0NFpNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2Wk0yNTYgNDQ4QzE1MC4xMzEgNDQ4IDY0IDM2MS44NjkgNjQgMjU2UzE1MC4xMzEgNjQgMjU2IDY0UzQ0OCAxNTAuMTMxIDQ0OCAyNTZTMzYxLjg2OSA0NDggMjU2IDQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleU(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M344 144C330.75 144 320 154.75 320 168V290.906C320 324.594 291.297 352 256 352S192 324.594 192 290.906V168C192 154.75 181.25 144 168 144S144 154.75 144 168V290.906C144 351.062 194.25 400 256 400S368 351.062 368 290.906V168C368 154.75 357.25 144 344 144ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" />
        </Icon>
    </>
}