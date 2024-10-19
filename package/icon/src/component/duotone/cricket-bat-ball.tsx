
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cricket-bat-ball` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cricket-bat-ball?s=duotone cricket-bat-ball}
 * @preview ![cricket-bat-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MS45OTkgMTY2Ljk2Nkw5LjU5MiAzNDkuMzY1QzMuNzMxIDM1NS4yMjcgMCAzNjMuMTY2IDAgMzcxLjM4MkMwIDQ3NC4xNyAxMDguODczIDUxMS45ODIgMTQwLjU5OSA1MTEuOTgyQzE0OC44MTYgNTExLjk4MiAxNTYuNzU4IDUwOC4yNTEgMTYyLjYyNCA1MDIuMzg3TDM0NS4wMjMgMzE5Ljk5MUgxOTEuOTk5VjE2Ni45NjZaICIgY2xhc3M9ImZhLXNlY29uZGFyeSI+PC9wYXRoPjxwYXRoIGQ9Ik00MzEuOTczIDM1Mi4wMDVDMzg3LjcyMyAzNTIuMDA1IDM1MS45NzMgMzg3Ljc1NCAzNTEuOTczIDQzMi4wMDNTMzg3LjcyMyA1MTIgNDMxLjk3MyA1MTJTNTExLjk3NCA0NzYuMjUxIDUxMS45NzQgNDMyLjAwM1M0NzYuMjIzIDM1Mi4wMDUgNDMxLjk3MyAzNTIuMDA1Wk00MDcuOTE1IDI1Ny4xMUM0MTMuMzA5IDI1MS43MTUgNDE2LjAwNiAyNDQuNjQ0IDQxNi4wMDYgMjM3LjU3M1M0MTMuMzA5IDIyMy40MzEgNDA3LjkxNSAyMTguMDM3TDM3My41NjMgMTgzLjY4Nkw1MDcuMzIxIDQ5LjkzM0M1MTAuNDQ2IDQ2LjgxIDUxMi4wMDkgNDIuNzE1IDUxMi4wMDkgMzguNjJTNTEwLjQ0NiAzMC40MyA1MDcuMzIxIDI3LjMwNUw0ODQuNyA0LjY4NEM0ODEuNTc3IDEuNTYxIDQ3Ny40ODIgMCA0NzMuMzg3IDBTNDY1LjE5NiAxLjU2MSA0NjIuMDcxIDQuNjg0TDMyOC4zMTMgMTM4LjQzOEwyOTMuOTYxIDEwNC4wODdDMjg4LjU2NyA5OC42OTMgMjgxLjQ5NiA5NS45OTYgMjc0LjQyNiA5NS45OTZTMjYwLjI4NSA5OC42OTMgMjU0Ljg5MSAxMDQuMDg3TDE5MiAxNjYuOTc2VjMxOS45OThIMzQ1LjAyNEw0MDcuOTE1IDI1Ny4xMVogIiBjbGFzcz0iZmEtcHJpbWFyeSI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function CricketBatBall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M191.999 166.966L9.592 349.365C3.731 355.227 0 363.166 0 371.382C0 474.17 108.873 511.982 140.599 511.982C148.816 511.982 156.758 508.251 162.624 502.387L345.023 319.991H191.999V166.966Z " />
            <path d="M431.973 352.005C387.723 352.005 351.973 387.754 351.973 432.003S387.723 512 431.973 512S511.974 476.251 511.974 432.003S476.223 352.005 431.973 352.005ZM407.915 257.11C413.309 251.715 416.006 244.644 416.006 237.573S413.309 223.431 407.915 218.037L373.563 183.686L507.321 49.933C510.446 46.81 512.009 42.715 512.009 38.62S510.446 30.43 507.321 27.305L484.7 4.684C481.577 1.561 477.482 0 473.387 0S465.196 1.561 462.071 4.684L328.313 138.438L293.961 104.087C288.567 98.693 281.496 95.996 274.426 95.996S260.285 98.693 254.891 104.087L192 166.976V319.998H345.024L407.915 257.11Z " />
        </Icon>
    </>
}