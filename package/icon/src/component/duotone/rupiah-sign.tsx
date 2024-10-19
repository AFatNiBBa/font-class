
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rupiah-sign` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rupiah-sign?s=duotone rupiah-sign}
 * @preview ![rupiah-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM5MiAxNjBIMzI4QzMwNS45MDggMTYwIDI4OCAxNzcuOTA4IDI4OCAyMDBWNDcyQzI4OCA0OTQuMDkyIDMwNS45MDggNTEyIDMyOCA1MTJTMzY4IDQ5NC4wOTIgMzY4IDQ3MlY0MDBIMzg4LjU0OUM0NDUuODA3IDQwMCA0OTcuOTE2IDM2MS4zMDkgNTA5LjQxNCAzMDUuMjE3QzUyNS4yMjEgMjI4LjA5NCA0NjYuNDE2IDE2MCAzOTIgMTYwWk0zOTIgMzIwSDM2OFYyNDBIMzkyQzQxNC4wNjIgMjQwIDQzMiAyNTcuOTM4IDQzMiAyODBTNDE0LjA2MiAzMjAgMzkyIDMyMFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjU1Ljk5OCAxNzZDMjU1Ljk5NiA3My42MzMgMTYyLjEyMyAzMiAxMDUuNTg4IDMySDQ4QzIxLjQ5MiAzMiAwIDUzLjQ5IDAgODBWNDQwQzAgNDYyLjA5MiAxNy45MSA0ODAgNDAgNDgwQzYyLjA5MiA0ODAgODAgNDYyLjA5MiA4MCA0NDBWMzIwSDEwMi45MDJMMTQ1LjUyOSA0NTAuOTk0QzE1MC40MzYgNDY4LjE2NCAxNjYuMTI3IDQ4MCAxODMuOTgyIDQ4MEMyMTAuNTUzIDQ4MCAyMjkuNzM0IDQ1NC41NjggMjIyLjQzNiA0MjkuMDIxTDE4MC44NTIgMzAxLjY4MkMyMjUuMzk2IDI3Ny4xNjggMjU2IDIzMC4zMzggMjU1Ljk5OCAxNzZaTTExMiAyNDBIODBWMTEySDExMkMxNDcuMjk3IDExMiAxNzYgMTQwLjcwMyAxNzYgMTc2UzE0Ny4yOTcgMjQwIDExMiAyNDBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RupiahSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M392 160H328C305.908 160 288 177.908 288 200V472C288 494.092 305.908 512 328 512S368 494.092 368 472V400H388.549C445.807 400 497.916 361.309 509.414 305.217C525.221 228.094 466.416 160 392 160ZM392 320H368V240H392C414.062 240 432 257.938 432 280S414.062 320 392 320Z" />
            <path d="M255.998 176C255.996 73.633 162.123 32 105.588 32H48C21.492 32 0 53.49 0 80V440C0 462.092 17.91 480 40 480C62.092 480 80 462.092 80 440V320H102.902L145.529 450.994C150.436 468.164 166.127 480 183.982 480C210.553 480 229.734 454.568 222.436 429.021L180.852 301.682C225.396 277.168 256 230.338 255.998 176ZM112 240H80V112H112C147.297 112 176 140.703 176 176S147.297 240 112 240Z" />
        </Icon>
    </>
}