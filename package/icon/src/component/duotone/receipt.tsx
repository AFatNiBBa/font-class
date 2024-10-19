
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `receipt` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/receipt?s=duotone receipt}
 * @preview ![receipt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM5MC4zNzUgMy4yODhMMzUyIDQ4LjAzMkwyOTcuNjI1IDMuMjg4QzI5MS44NzUgLTEuMDg2IDI4NC4xMjUgLTEuMDg2IDI3OC4zNzUgMy4yODhMMjI0IDQ4LjAzMkwxNjkuNjI1IDMuMjg4QzE2My44NzUgLTEuMDg2IDE1Ni4xMjUgLTEuMDg2IDE1MC4zNzUgMy4yODhMOTYgNDguMDMyTDU3LjYyNSAzLjI4OEM0NyAtNC43MSAzMiAyLjc4OCAzMiAxNi4wMzZWNDk1Ljk2NEMzMiA1MDkuMjEyIDQ3IDUxNi43MSA1Ny42MjUgNTA4LjcxMkw5NiA0NjMuOTY4TDE1MC4zNzUgNTA4LjcxMkMxNTYuMTI1IDUxMy4wODYgMTYzLjg3NSA1MTMuMDg2IDE2OS42MjUgNTA4LjcxMkwyMjQgNDYzLjk2OEwyNzguMzc1IDUwOC43MTJDMjg0LjEyNSA1MTMuMDg2IDI5MS44NzUgNTEzLjA4NiAyOTcuNjI1IDUwOC43MTJMMzUyIDQ2My45NjhMMzkwLjM3NSA1MDguNzEyQzQwMC44NzUgNTE2LjcxIDQxNiA1MDkuMjEyIDQxNiA0OTUuOTY0VjE2LjAzNkM0MTYgMi43ODggNDAxIC00LjcxIDM5MC4zNzUgMy4yODhaTTMzNiAzNjcuOTQ0SDExMkMxMDMuMTY0IDM2Ny45NDQgOTYgMzYwLjc4MSA5NiAzNTEuOTQ2Qzk2IDM0My4xMSAxMDMuMTY0IDMzNS45NDkgMTEyIDMzNS45NDlIMzM2QzM0NC44MzggMzM1Ljk0OSAzNTIgMzQzLjExIDM1MiAzNTEuOTQ2QzM1MiAzNjAuNzgxIDM0NC44MzggMzY3Ljk0NCAzMzYgMzY3Ljk0NFpNMzM2IDI3MS45NTlIMTEyQzEwMy4xNjQgMjcxLjk1OSA5NiAyNjQuNzk2IDk2IDI1NS45NjFDOTYgMjQ3LjEyNCAxMDMuMTY0IDIzOS45NjMgMTEyIDIzOS45NjNIMzM2QzM0NC44MzggMjM5Ljk2MyAzNTIgMjQ3LjEyNCAzNTIgMjU1Ljk2MUMzNTIgMjY0Ljc5NiAzNDQuODM4IDI3MS45NTkgMzM2IDI3MS45NTlaTTMzNiAxNzUuOTczSDExMkMxMDMuMTY0IDE3NS45NzMgOTYgMTY4LjgxIDk2IDE1OS45NzZDOTYgMTUxLjEzOSAxMDMuMTY0IDE0My45NzggMTEyIDE0My45NzhIMzM2QzM0NC44MzggMTQzLjk3OCAzNTIgMTUxLjEzOSAzNTIgMTU5Ljk3NkMzNTIgMTY4LjgxIDM0NC44MzggMTc1Ljk3MyAzMzYgMTc1Ljk3M1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzM2IDMzNS45NDlIMTEyQzEwMy4xNjQgMzM1Ljk0OSA5NiAzNDMuMTEgOTYgMzUxLjk0NkM5NiAzNjAuNzgxIDEwMy4xNjQgMzY3Ljk0NCAxMTIgMzY3Ljk0NEgzMzZDMzQ0LjgzOCAzNjcuOTQ0IDM1MiAzNjAuNzgxIDM1MiAzNTEuOTQ2QzM1MiAzNDMuMTEgMzQ0LjgzOCAzMzUuOTQ5IDMzNiAzMzUuOTQ5Wk0xMTIgMTc1Ljk3M0gzMzZDMzQ0LjgzOCAxNzUuOTczIDM1MiAxNjguODEgMzUyIDE1OS45NzZDMzUyIDE1MS4xMzkgMzQ0LjgzOCAxNDMuOTc4IDMzNiAxNDMuOTc4SDExMkMxMDMuMTY0IDE0My45NzggOTYgMTUxLjEzOSA5NiAxNTkuOTc2Qzk2IDE2OC44MSAxMDMuMTY0IDE3NS45NzMgMTEyIDE3NS45NzNaTTMzNiAyMzkuOTYzSDExMkMxMDMuMTY0IDIzOS45NjMgOTYgMjQ3LjEyNCA5NiAyNTUuOTYxQzk2IDI2NC43OTYgMTAzLjE2NCAyNzEuOTU5IDExMiAyNzEuOTU5SDMzNkMzNDQuODM4IDI3MS45NTkgMzUyIDI2NC43OTYgMzUyIDI1NS45NjFDMzUyIDI0Ny4xMjQgMzQ0LjgzOCAyMzkuOTYzIDMzNiAyMzkuOTYzWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Receipt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M390.375 3.288L352 48.032L297.625 3.288C291.875 -1.086 284.125 -1.086 278.375 3.288L224 48.032L169.625 3.288C163.875 -1.086 156.125 -1.086 150.375 3.288L96 48.032L57.625 3.288C47 -4.71 32 2.788 32 16.036V495.964C32 509.212 47 516.71 57.625 508.712L96 463.968L150.375 508.712C156.125 513.086 163.875 513.086 169.625 508.712L224 463.968L278.375 508.712C284.125 513.086 291.875 513.086 297.625 508.712L352 463.968L390.375 508.712C400.875 516.71 416 509.212 416 495.964V16.036C416 2.788 401 -4.71 390.375 3.288ZM336 367.944H112C103.164 367.944 96 360.781 96 351.946C96 343.11 103.164 335.949 112 335.949H336C344.838 335.949 352 343.11 352 351.946C352 360.781 344.838 367.944 336 367.944ZM336 271.959H112C103.164 271.959 96 264.796 96 255.961C96 247.124 103.164 239.963 112 239.963H336C344.838 239.963 352 247.124 352 255.961C352 264.796 344.838 271.959 336 271.959ZM336 175.973H112C103.164 175.973 96 168.81 96 159.976C96 151.139 103.164 143.978 112 143.978H336C344.838 143.978 352 151.139 352 159.976C352 168.81 344.838 175.973 336 175.973Z" />
            <path d="M336 335.949H112C103.164 335.949 96 343.11 96 351.946C96 360.781 103.164 367.944 112 367.944H336C344.838 367.944 352 360.781 352 351.946C352 343.11 344.838 335.949 336 335.949ZM112 175.973H336C344.838 175.973 352 168.81 352 159.976C352 151.139 344.838 143.978 336 143.978H112C103.164 143.978 96 151.139 96 159.976C96 168.81 103.164 175.973 112 175.973ZM336 239.963H112C103.164 239.963 96 247.124 96 255.961C96 264.796 103.164 271.959 112 271.959H336C344.838 271.959 352 264.796 352 255.961C352 247.124 344.838 239.963 336 239.963Z" />
        </Icon>
    </>
}