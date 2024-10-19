
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d8` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d8?s=thin dice-d8}
 * @preview ![dice-d8](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMjU2LjAzNUM1MTIgMjQ3LjM5NyA1MDguNjk1IDIzOC43NDcgNTAyLjA4NiAyMzIuMTM2TDI3OS45MDYgOS45MDhDMjczLjMxMiAzLjMxMyAyNjQuNTkzIDAgMjU2IDBTMjM4LjY4OCAzLjMxMyAyMzIuMDk0IDkuOTA4TDkuOTE0IDIzMi4xMzZDMy4zMDUgMjM4Ljc0NyAwIDI0Ny4zNzMgMCAyNTZTMy4zMDUgMjczLjI1MyA5LjkxNCAyNzkuODY0TDIzMi4wOTQgNTAyLjA5MkMyMzguNjg4IDUwOC42ODcgMjQ3LjMxMyA1MTIgMjU2IDUxMlMyNzMuMzEyIDUwOC42ODcgMjc5LjkwNiA1MDIuMDkyTDUwMi4wODYgMjc5Ljg2NEM1MDguNjk1IDI3My4zIDUxMiAyNjQuNjczIDUxMiAyNTYuMDM1Wk0yNDguMDA4IDQ5My44NkMyNDYuMzY3IDQ5My4wMjIgMjQ0Ljc1IDQ5Mi4xMTcgMjQzLjQwNyA0OTAuNzc1TDIzLjE3OSAyNzAuNTAxTDI0OC4wMDggMzU3LjU2MlY0OTMuODZaTTI0OC4wMDggMzQwLjM3M0wxNy4wMTkgMjUwLjk1QzE3LjgzMSAyNDguMjE5IDE5LjA3NCAyNDUuNjA0IDIxLjIyNiAyNDMuNDUxTDI0My40MDcgMjEuMjIzQzI0NC43MjcgMTkuOTA0IDI0Ni4zNiAxOC45OTggMjQ4LjAwOCAxOC4xNThWMzQwLjM3M1pNMjY4LjU5MyA0OTAuNzc3QzI2Ny4yNTcgNDkyLjExNCAyNjUuNjQgNDkzLjAxMiAyNjQuMDA4IDQ5My44NVYzNTcuNTYyTDQ4OC44MTMgMjcwLjUxMkwyNjguNTkzIDQ5MC43NzdaTTI2NC4wMDggMzQwLjM3M1YxOC4xNjdDMjY1LjY0OCAxOS4wMDcgMjY3LjI3NyAxOS45MSAyNjguNTkzIDIxLjIyNUw0OTAuNzc0IDI0My40NTFDNDkyLjg4MyAyNDUuNTY0IDQ5NC4xNTcgMjQ4LjE4IDQ5NC45OTMgMjUwLjk1TDI2NC4wMDggMzQwLjM3M1ogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function DiceD8(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 256.035C512 247.397 508.695 238.747 502.086 232.136L279.906 9.908C273.312 3.313 264.593 0 256 0S238.688 3.313 232.094 9.908L9.914 232.136C3.305 238.747 0 247.373 0 256S3.305 273.253 9.914 279.864L232.094 502.092C238.688 508.687 247.313 512 256 512S273.312 508.687 279.906 502.092L502.086 279.864C508.695 273.3 512 264.673 512 256.035ZM248.008 493.86C246.367 493.022 244.75 492.117 243.407 490.775L23.179 270.501L248.008 357.562V493.86ZM248.008 340.373L17.019 250.95C17.831 248.219 19.074 245.604 21.226 243.451L243.407 21.223C244.727 19.904 246.36 18.998 248.008 18.158V340.373ZM268.593 490.777C267.257 492.114 265.64 493.012 264.008 493.85V357.562L488.813 270.512L268.593 490.777ZM264.008 340.373V18.167C265.648 19.007 267.277 19.91 268.593 21.225L490.774 243.451C492.883 245.564 494.157 248.18 494.993 250.95L264.008 340.373Z " />
        </Icon>
    </>
}