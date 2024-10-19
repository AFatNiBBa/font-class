
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sunrise` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sunrise?s=thin sunrise}
 * @preview ![sunrise](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjggNTA2LjEwOUg4QzMuNTk0IDUwNi4xMDkgMCA1MDkuNjg3IDAgNTE0LjEwOVMzLjU5NCA1MjIuMTA5IDggNTIyLjEwOUg1NjhDNTcyLjQwNiA1MjIuMTA5IDU3NiA1MTguNTMxIDU3NiA1MTQuMTA5UzU3Mi40MDYgNTA2LjEwOSA1NjggNTA2LjEwOVpNODAuMjE5IDQ3MC42NzJDODIuNzE5IDQ3NC4yOTcgODcuNzE5IDQ3NS4xNDEgOTEuMzQ0IDQ3Mi42ODdDOTQuOTY5IDQ3MC4xNzIgOTUuODc1IDQ2NS4xODcgOTMuMzQ0IDQ2MS41NDdMNDEuMzEyIDM4Ni41MzFDMzkuMjgxIDM4My41OTQgNDAuMTI1IDM4MC43MTkgNDAuNTYyIDM3OS42MjVDNDEuMDMxIDM3OC41MTYgNDIuNDY5IDM3NS44OTEgNDUuOTk5IDM3NS4yNUwxNTUgMzU1LjU0N0MxNTguMjgxIDM1NC45NTMgMTYwLjg0NCAzNTIuMzc1IDE2MS40MzggMzQ5LjA5NEwxODEuMTU2IDI0MC4wOTRDMTgxLjc4MSAyMzYuNTc4IDE4NC40MDYgMjM1LjEyNSAxODUuNSAyMzQuNjcyUzE4OS40NjkgMjMzLjM0NCAxOTIuNDM4IDIzNS40MjJMMjgzLjQzOCAyOTguNTc4QzI4Ni4xODggMzAwLjQ4NCAyODkuODEzIDMwMC40ODQgMjkyLjU2MiAyOTguNTc4TDM4My41NjIgMjM1LjQyMkMzODYuNTMxIDIzMy4zMjggMzg5LjM3NSAyMzQuMjAzIDM5MC41IDIzNC42NzJDMzkxLjU5NCAyMzUuMTI1IDM5NC4yMTkgMjM2LjU3OCAzOTQuODQ0IDI0MC4wOTRMNDE0LjU2MiAzNDkuMDk0QzQxNS4xNTYgMzUyLjM3NSA0MTcuNzE5IDM1NC45NTMgNDIxIDM1NS41NDdMNTMwIDM3NS4yNUM1MzMuNTMxIDM3NS44OTEgNTM0Ljk2OSAzNzguNTE2IDUzNS40MzcgMzc5LjYyNUM1MzUuODc1IDM4MC43MTkgNTM2LjcxOSAzODMuNTk0IDUzNC42ODcgMzg2LjUzMUw0ODIuNjU2IDQ2MS41NDdDNDgwLjEyNSA0NjUuMTg4IDQ4MS4wMzEgNDcwLjE3MiA0ODQuNjU2IDQ3Mi42ODhDNDg2LjA2MiA0NzMuNjQxIDQ4Ny42MjUgNDc0LjEwOSA0ODkuMjE5IDQ3NC4xMDlDNDkxLjc1IDQ3NC4xMDkgNDk0LjI1IDQ3Mi45MDYgNDk1Ljc4MSA0NzAuNjcyTDU0Ny44MTIgMzk1LjY1NkM1NTIuMzQ0IDM4OS4xMjUgNTUzLjI1IDM4MC44NDQgNTUwLjIxOSAzNzMuNVM1NDAuNjg3IDM2MC45MjIgNTMyLjg3NSAzNTkuNUw0MjkuMzEyIDM0MC43ODFMNDEwLjU5NCAyMzcuMjVDNDA5LjE4OCAyMjkuNDM3IDQwMy45NjkgMjIyLjkzNyAzOTYuNjI1IDIxOS44OTFDMzg5LjIxOSAyMTYuODkxIDM4MSAyMTcuNzUgMzc0LjQzOCAyMjIuMjY2TDI4OCAyODIuMjY2TDIwMS41NjIgMjIyLjI2NkMxOTUuMDMxIDIxNy43MTkgMTg2Ljc1IDIxNi44NTkgMTc5LjM3NSAyMTkuODkxQzE3Mi4wMzEgMjIyLjkzNyAxNjYuODEyIDIyOS40MzcgMTY1LjQwNiAyMzcuMjVMMTQ2LjY4OCAzNDAuNzgxTDQzLjEyNSAzNTkuNUMzNS4zMTIgMzYwLjkyMiAyOC44MTIgMzY2LjE1NiAyNS43ODEgMzczLjVTMjMuNjU2IDM4OS4xMjUgMjguMTg3IDM5NS42NTZMODAuMjE5IDQ3MC42NzJaTTI4OCAzNjIuMTA5QzIyOS4xNTYgMzYyLjEwOSAxNzkuMTU2IDQwNi4zOTEgMTcxLjcxOSA0NjUuMTA5QzE3MS4xNTYgNDY5LjQ4NCAxNzQuMjgxIDQ3My40ODQgMTc4LjY1NiA0NzQuMDQ3QzE4My4xODggNDc0LjUzMSAxODcuMDMxIDQ3MS40NjkgMTg3LjU5NCA0NjcuMTA5QzE5NC4wMzEgNDE2LjM3NSAyMzcuMTg4IDM3OC4xMDkgMjg4IDM3OC4xMDlTMzgxLjk2OSA0MTYuMzc1IDM4OC40MDYgNDY3LjEwOUMzODguOTA2IDQ3MS4xNTYgMzkyLjM3NSA0NzQuMTA5IDM5Ni4zNDQgNDc0LjEwOUMzOTYuNjU2IDQ3NC4xMDkgMzk3IDQ3NC4wOTQgMzk3LjM0NCA0NzQuMDQ3QzQwMS43MTkgNDczLjQ4NCA0MDQuODQ0IDQ2OS40ODQgNDA0LjI4MSA0NjUuMTA5QzM5Ni44NDQgNDA2LjM5MSAzNDYuODQ0IDM2Mi4xMDkgMjg4IDM2Mi4xMDlaTTE5Ny40MDYgMTA0TDI4MCAyOC4zMDFWMjE4LjEwOUMyODAgMjIyLjUzMSAyODMuNTk0IDIyNi4xMDkgMjg4IDIyNi4xMDlTMjk2IDIyMi41MzEgMjk2IDIxOC4xMDlWMjguMzAxTDM3OC41OTQgMTA0QzM4MC4xMjUgMTA1LjQyMiAzODIuMDYyIDEwNi4xMDkgMzg0IDEwNi4xMDlDMzg2LjE1NiAxMDYuMTA5IDM4OC4zMTIgMTA1LjIzNCAzODkuOTA2IDEwMy41MTZDMzkyLjg3NSAxMDAuMjY2IDM5Mi42NTYgOTUuMjAzIDM4OS40MDYgOTIuMjE5TDI5My40MDYgNC4yMTlDMjkwLjM0NCAxLjQwNiAyODUuNjU2IDEuNDA2IDI4Mi41OTQgNC4yMTlMMTg2LjU5NCA5Mi4yMTlDMTgzLjM0NCA5NS4yMDMgMTgzLjEyNSAxMDAuMjY2IDE4Ni4wOTQgMTAzLjUxNkMxODkuMTI1IDEwNi43OTcgMTk0LjIxOSAxMDcuMDE2IDE5Ny40MDYgMTA0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Sunrise(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M568 506.109H8C3.594 506.109 0 509.687 0 514.109S3.594 522.109 8 522.109H568C572.406 522.109 576 518.531 576 514.109S572.406 506.109 568 506.109ZM80.219 470.672C82.719 474.297 87.719 475.141 91.344 472.687C94.969 470.172 95.875 465.187 93.344 461.547L41.312 386.531C39.281 383.594 40.125 380.719 40.562 379.625C41.031 378.516 42.469 375.891 45.999 375.25L155 355.547C158.281 354.953 160.844 352.375 161.438 349.094L181.156 240.094C181.781 236.578 184.406 235.125 185.5 234.672S189.469 233.344 192.438 235.422L283.438 298.578C286.188 300.484 289.813 300.484 292.562 298.578L383.562 235.422C386.531 233.328 389.375 234.203 390.5 234.672C391.594 235.125 394.219 236.578 394.844 240.094L414.562 349.094C415.156 352.375 417.719 354.953 421 355.547L530 375.25C533.531 375.891 534.969 378.516 535.437 379.625C535.875 380.719 536.719 383.594 534.687 386.531L482.656 461.547C480.125 465.188 481.031 470.172 484.656 472.688C486.062 473.641 487.625 474.109 489.219 474.109C491.75 474.109 494.25 472.906 495.781 470.672L547.812 395.656C552.344 389.125 553.25 380.844 550.219 373.5S540.687 360.922 532.875 359.5L429.312 340.781L410.594 237.25C409.188 229.437 403.969 222.937 396.625 219.891C389.219 216.891 381 217.75 374.438 222.266L288 282.266L201.562 222.266C195.031 217.719 186.75 216.859 179.375 219.891C172.031 222.937 166.812 229.437 165.406 237.25L146.688 340.781L43.125 359.5C35.312 360.922 28.812 366.156 25.781 373.5S23.656 389.125 28.187 395.656L80.219 470.672ZM288 362.109C229.156 362.109 179.156 406.391 171.719 465.109C171.156 469.484 174.281 473.484 178.656 474.047C183.188 474.531 187.031 471.469 187.594 467.109C194.031 416.375 237.188 378.109 288 378.109S381.969 416.375 388.406 467.109C388.906 471.156 392.375 474.109 396.344 474.109C396.656 474.109 397 474.094 397.344 474.047C401.719 473.484 404.844 469.484 404.281 465.109C396.844 406.391 346.844 362.109 288 362.109ZM197.406 104L280 28.301V218.109C280 222.531 283.594 226.109 288 226.109S296 222.531 296 218.109V28.301L378.594 104C380.125 105.422 382.062 106.109 384 106.109C386.156 106.109 388.312 105.234 389.906 103.516C392.875 100.266 392.656 95.203 389.406 92.219L293.406 4.219C290.344 1.406 285.656 1.406 282.594 4.219L186.594 92.219C183.344 95.203 183.125 100.266 186.094 103.516C189.125 106.797 194.219 107.016 197.406 104Z" />
        </Icon>
    </>
}