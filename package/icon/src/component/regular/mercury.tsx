
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mercury` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mercury?s=regular mercury}
 * @preview ![mercury](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMjIzLjk5NEMzNjggMTU3Ljg4IDMzMS40OTggMTAwLjM0NyAyNzcuNTkyIDcwLjI2NkMyOTAuNDUxIDYyLjA1OSAzMDIuNiA1Mi4xNTMgMzEzLjU5NCA0MC4zMDNDMzIyLjU5NCAzMC41ODQgMzIyLjAzMSAxNS4zOTYgMzEyLjMxMiA2LjM5NkMzMDIuNjU2IC0yLjYwNCAyODcuNDA2IC0yLjA0MiAyNzguNDA2IDcuNjc3QzIzMC4xNTYgNTkuNjc4IDE1My44NDQgNTkuNjc4IDEwNS41OTQgNy42NzdDOTYuNTk0IC0yLjA0MiA4MS4zNDQgLTIuNjA0IDcxLjY4OCA2LjM5NkM2MS45NjkgMTUuMzk2IDYxLjQwNiAzMC41ODQgNzAuNDA2IDQwLjMwM0M4MS40IDUyLjE1MyA5My41NDkgNjIuMDU5IDEwNi40MDggNzAuMjY2QzUyLjUwMiAxMDAuMzQ3IDE2IDE1Ny44OCAxNiAyMjMuOTk0QzE2IDMxMy4wMzUgODIuMTgyIDM4Ni40NDEgMTY4IDM5OC4xNzNWNDIzLjk5OEgxMzZDMTIyLjc1IDQyMy45OTggMTEyIDQzNC43NDggMTEyIDQ0Ny45OTlDMTEyIDQ2MS4yNDkgMTIyLjc1IDQ3MS45OTkgMTM2IDQ3MS45OTlIMTY4VjQ4OEMxNjggNTAxLjI1IDE3OC43NSA1MTIgMTkyIDUxMlMyMTYgNTAxLjI1IDIxNiA0ODhWNDcxLjk5OUgyNDhDMjYxLjI1IDQ3MS45OTkgMjcyIDQ2MS4yNDkgMjcyIDQ0Ny45OTlDMjcyIDQzNC43NDggMjYxLjI1IDQyMy45OTggMjQ4IDQyMy45OThIMjE2VjM5OC4xNzNDMzAxLjgxOCAzODYuNDQxIDM2OCAzMTMuMDM1IDM2OCAyMjMuOTk0Wk02NCAyMjMuOTk0QzY0IDE1My40MTMgMTIxLjQyIDk1Ljk5MiAxOTIgOTUuOTkyUzMyMCAxNTMuNDEzIDMyMCAyMjMuOTk0UzI2Mi41OCAzNTEuOTk3IDE5MiAzNTEuOTk3UzY0IDI5NC41NzYgNjQgMjIzLjk5NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Mercury(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M368 223.994C368 157.88 331.498 100.347 277.592 70.266C290.451 62.059 302.6 52.153 313.594 40.303C322.594 30.584 322.031 15.396 312.312 6.396C302.656 -2.604 287.406 -2.042 278.406 7.677C230.156 59.678 153.844 59.678 105.594 7.677C96.594 -2.042 81.344 -2.604 71.688 6.396C61.969 15.396 61.406 30.584 70.406 40.303C81.4 52.153 93.549 62.059 106.408 70.266C52.502 100.347 16 157.88 16 223.994C16 313.035 82.182 386.441 168 398.173V423.998H136C122.75 423.998 112 434.748 112 447.999C112 461.249 122.75 471.999 136 471.999H168V488C168 501.25 178.75 512 192 512S216 501.25 216 488V471.999H248C261.25 471.999 272 461.249 272 447.999C272 434.748 261.25 423.998 248 423.998H216V398.173C301.818 386.441 368 313.035 368 223.994ZM64 223.994C64 153.413 121.42 95.992 192 95.992S320 153.413 320 223.994S262.58 351.997 192 351.997S64 294.576 64 223.994Z" />
        </Icon>
    </>
}