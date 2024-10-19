
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-g` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-g?s=duotone circle-g}
 * @preview ![circle-g](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMzg0IDI3NC45MDZDMzg0IDI3Ni4zNTkgMzgzLjg3NSAyNzcuODI4IDM4My41OTQgMjc5LjI1QzM3OS4yMTkgMzAzLjA3OCAzNjYuMDMxIDMyNi45NTMgMzQ2LjUgMzQ2LjUxNkMzMjIuMzQ0IDM3MC42ODggMjkwLjE4OCAzODQgMjU2IDM4NFMxODkuNjU2IDM3MC42ODggMTY1LjUgMzQ2LjUxNkMxMTUuNTk0IDI5Ni42MDkgMTE1LjU5NCAyMTUuMzkxIDE2NS41IDE2NS40ODRDMjEzLjQwNiAxMTcuNTQ3IDI5My40NjkgMTE1LjMxMiAzNDQgMTYwLjYwOUMzNTMuODc1IDE2OS40NTMgMzU0LjcxOSAxODQuNjI1IDM0NS44NzUgMTk0LjVDMzM3IDIwNC40MzggMzIxLjgxMiAyMDUuMjE5IDMxMiAxOTYuMzU5QzI4MC4wOTQgMTY3Ljc5NyAyMjkuNjU2IDE2OS4xNzIgMTk5LjQzOCAxOTkuNDIyQzE2OC4yNSAyMzAuNjI1IDE2OC4yNSAyODEuMzc1IDE5OS40MzggMzEyLjU3OEMyMjkuNjI1IDM0Mi43OTcgMjgyLjM3NSAzNDIuNzk3IDMxMi41NjIgMzEyLjU3OEMzMjAuMTU2IDMwNC45NjkgMzI2LjI1IDI5Ni41NzggMzMwLjQ2OSAyODhIMjgwQzI2Ni43NSAyODggMjU2IDI3Ny4yNSAyNTYgMjY0UzI2Ni43NSAyNDAgMjgwIDI0MEgzNjBDMzczLjI1IDI0MCAzODQgMjUwLjc1IDM4NCAyNjRWMjc0LjkwNloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzU5LjkzIDI0MEgyNzkuOTNDMjY2LjY4IDI0MCAyNTUuOTMgMjUwLjc1IDI1NS45MyAyNjRTMjY2LjY4IDI4OCAyNzkuOTMgMjg4SDMzMC4zOThDMzI2LjE4IDI5Ni41NzggMzIwLjA4NiAzMDQuOTY5IDMxMi40OTIgMzEyLjU3OEMyODIuMzA1IDM0Mi43OTcgMjI5LjU1NSAzNDIuNzk3IDE5OS4zNjcgMzEyLjU3OEMxNjguMTggMjgxLjM3NSAxNjguMTggMjMwLjYyNSAxOTkuMzY3IDE5OS40MjJDMjI5LjU4NiAxNjkuMTcyIDI4MC4wMjMgMTY3Ljc5NyAzMTEuOTMgMTk2LjM1OUMzMjEuNzQyIDIwNS4yMTkgMzM2LjkzIDIwNC40MzggMzQ1LjgwNSAxOTQuNUMzNTQuNjQ4IDE4NC42MjUgMzUzLjgwNSAxNjkuNDUzIDM0My45MyAxNjAuNjA5QzI5My4zOTggMTE1LjMxMyAyMTMuMzM2IDExNy41NDcgMTY1LjQzIDE2NS40ODRDMTE1LjUyMyAyMTUuMzkxIDExNS41MjMgMjk2LjYwOSAxNjUuNDMgMzQ2LjUxNkMxODkuNTg2IDM3MC42ODggMjIxLjc0MiAzODQgMjU1LjkzIDM4NFMzMjIuMjczIDM3MC42ODggMzQ2LjQzIDM0Ni41MTZDMzY1Ljk2MSAzMjYuOTUzIDM3OS4xNDggMzAzLjA3OCAzODMuNTIzIDI3OS4yNUMzODMuODA1IDI3Ny44MjggMzgzLjkzIDI3Ni4zNTkgMzgzLjkzIDI3NC45MDZWMjY0QzM4My45MyAyNTAuNzUgMzczLjE4IDI0MCAzNTkuOTMgMjQwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleG(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM384 274.906C384 276.359 383.875 277.828 383.594 279.25C379.219 303.078 366.031 326.953 346.5 346.516C322.344 370.688 290.188 384 256 384S189.656 370.688 165.5 346.516C115.594 296.609 115.594 215.391 165.5 165.484C213.406 117.547 293.469 115.312 344 160.609C353.875 169.453 354.719 184.625 345.875 194.5C337 204.438 321.812 205.219 312 196.359C280.094 167.797 229.656 169.172 199.438 199.422C168.25 230.625 168.25 281.375 199.438 312.578C229.625 342.797 282.375 342.797 312.562 312.578C320.156 304.969 326.25 296.578 330.469 288H280C266.75 288 256 277.25 256 264S266.75 240 280 240H360C373.25 240 384 250.75 384 264V274.906Z" />
            <path d="M359.93 240H279.93C266.68 240 255.93 250.75 255.93 264S266.68 288 279.93 288H330.398C326.18 296.578 320.086 304.969 312.492 312.578C282.305 342.797 229.555 342.797 199.367 312.578C168.18 281.375 168.18 230.625 199.367 199.422C229.586 169.172 280.023 167.797 311.93 196.359C321.742 205.219 336.93 204.438 345.805 194.5C354.648 184.625 353.805 169.453 343.93 160.609C293.398 115.313 213.336 117.547 165.43 165.484C115.523 215.391 115.523 296.609 165.43 346.516C189.586 370.688 221.742 384 255.93 384S322.273 370.688 346.43 346.516C365.961 326.953 379.148 303.078 383.523 279.25C383.805 277.828 383.93 276.359 383.93 274.906V264C383.93 250.75 373.18 240 359.93 240Z" />
        </Icon>
    </>
}