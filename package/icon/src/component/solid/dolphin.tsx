
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dolphin` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dolphin?s=solid dolphin}
 * @preview ![dolphin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzguMzY3IDEyOS41MjNMNDI0LjQ2MyAxMTcuNjA1QzQzMy40NzkgOTMuMzU3IDQ1MC42OTMgNjMuNDY5IDQ3Ni43NzEgMjcuNzEzQzQ4Mi4wODIgMjAuMzgxIDQ4MC4wNTMgMTIuNjc2IDQ3Ni4zMzggNy44OTVDNDcxLjcxOSAxLjkxMiA0NjQuNTA4IC0xLjAxMiA0NTYuMDAyIDAuMzE4QzQwNC4yNDggOC40MzcgMzYyLjM4NyAyNC45NTMgMzMyLjA4IDQwLjQwMkMyOTYuNTc4IDE0LjY3OCAyNTQuMTc0IDAgMjEwLjA0NSAwSDE3NkM5Ni40NzEgMCAzMiA2NC40NzEgMzIgMTQ0QzMyIDE2Mi4zODEgMzUuNzcxIDE3OS44MDcgNDIuMDQ5IDE5NS45NjlMMTQuMjUgMjE0LjUwMkM1LjM0OCAyMjAuNDM4IDAgMjMwLjQyOCAwIDI0MS4xMjdWMjU2LjAwMkMwIDI3My42NzYgMTQuMzI2IDI4OC4wMDIgMzIgMjg4LjAwMkgxOTJMMTkxLjk5OCAyODhIMTkyLjk0M0wyOTUuNzY4IDM0OS42OTVDMzA2LjQzMiAzNTYuMDk0IDMyMCAzNDguNDEyIDMyMCAzMzUuOTc1VjI4OEgzMjIuOTAyQzMyMy43MzYgMjg4IDMyNC40OTIgMjg4LjIxMyAzMjUuMzE0IDI4OC4yNDhDMzI2LjIyMSAyODguMjA1IDMyNy4wODIgMjg4IDMyOCAyODhDMzU4LjkyOCAyODggMzg0IDMxMy4wNzIgMzg0IDM0NFMzNTguOTI4IDQwMCAzMjggNDAwSDI2NS43NzlMMjUyLjcxMiAzNzguNjg4QzI0OC4zMDYgMzcyLjAzMyAyNDAuODA4IDM2OCAyMzIuNzQ1IDM2OEgxNzEuOTkzQzE2Mi40MzMgMzY4IDE1Ni43MjggMzc4LjY1NCAxNjIuMDI5IDM4Ni42MTFMMTk3LjU4MSA0MzkuOTg2VjQ0MC4wMTJMMTYyLjA1NiA0OTMuMzQyQzE1Ni43NDMgNTAxLjMyIDE2Mi40NjIgNTEyIDE3Mi4wNDYgNTEySDIzMi43NDNDMjQwLjgwOCA1MTEuOTk4IDI0OC4zMDYgNTA3Ljk2OSAyNTIuNzEyIDUwMS4zMTFMMjY1Ljc3OSA0ODBIMzIwQzQyNS45MiA0ODAgNTEyLjQxIDM5My45MTggNTEyIDI4OEM1MTIgMjAyLjI2OSA0NjAuMzE0IDE0OC4zMzUgNDM4LjM2NyAxMjkuNTIzWk0xMjggMTQ4LjMxNkMxMjkuODM4IDEzNi44ODcgMTM5LjMwOSAxMjggMTUxLjI1NiAxMjhDMTY0LjUxIDEyOCAxNzUuMjU2IDEzOC43NDQgMTc1LjI1NiAxNTJDMTc1LjI1NiAxNjUuMjU0IDE2NC41MSAxNzYgMTUxLjI1NiAxNzZDMTM5LjMwOSAxNzYgMTI5LjgzOCAxNjcuMTEzIDEyOCAxNTUuNjg0VjE0OC4zMTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Dolphin(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M438.367 129.523L424.463 117.605C433.479 93.357 450.693 63.469 476.771 27.713C482.082 20.381 480.053 12.676 476.338 7.895C471.719 1.912 464.508 -1.012 456.002 0.318C404.248 8.437 362.387 24.953 332.08 40.402C296.578 14.678 254.174 0 210.045 0H176C96.471 0 32 64.471 32 144C32 162.381 35.771 179.807 42.049 195.969L14.25 214.502C5.348 220.438 0 230.428 0 241.127V256.002C0 273.676 14.326 288.002 32 288.002H192L191.998 288H192.943L295.768 349.695C306.432 356.094 320 348.412 320 335.975V288H322.902C323.736 288 324.492 288.213 325.314 288.248C326.221 288.205 327.082 288 328 288C358.928 288 384 313.072 384 344S358.928 400 328 400H265.779L252.712 378.688C248.306 372.033 240.808 368 232.745 368H171.993C162.433 368 156.728 378.654 162.029 386.611L197.581 439.986V440.012L162.056 493.342C156.743 501.32 162.462 512 172.046 512H232.743C240.808 511.998 248.306 507.969 252.712 501.311L265.779 480H320C425.92 480 512.41 393.918 512 288C512 202.269 460.314 148.335 438.367 129.523ZM128 148.316C129.838 136.887 139.309 128 151.256 128C164.51 128 175.256 138.744 175.256 152C175.256 165.254 164.51 176 151.256 176C139.309 176 129.838 167.113 128 155.684V148.316Z" />
        </Icon>
    </>
}