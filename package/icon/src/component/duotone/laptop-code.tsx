
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `laptop-code` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-code?s=duotone laptop-code}
 * @preview ![laptop-code](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCA5Nkg1MTJWMzUySDU3NlY4MEM1NzYgNTMuNjI1IDU1NC4zNzUgMzIgNTI4IDMySDExMkM4NS42MjUgMzIgNjQgNTMuNjI1IDY0IDgwVjM1MkgxMjhWOTZaTTYyNCAzODRIMTZDNy4yNSAzODQgMCAzOTEuMjUgMCA0MDBWNDE2QzAgNDUxLjI1IDI4Ljc1IDQ4MCA2NCA0ODBINTc2QzYxMS4yNSA0ODAgNjQwIDQ1MS4yNSA2NDAgNDE2VjQwMEM2NDAgMzkxLjI1IDYzMi43NSAzODQgNjI0IDM4NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTI4IDk2VjM1Mkg1MTJWOTZIMTI4Wk0yNzQuMTQxIDI1Ny44NTJDMjgxLjk1MyAyNjUuNjY0IDI4MS45NTMgMjc4LjM1MiAyNzQuMTQxIDI4Ni4xNjRDMjcwLjIzNCAyOTAuMDcgMjY1LjEyNSAyOTIuMDA4IDI2MCAyOTIuMDA4UzI0OS43NjYgMjkwLjA3IDI0NS44NTkgMjg2LjE2NEwxOTcuODU5IDIzOC4xNjRDMTkwLjA0NyAyMzAuMzUyIDE5MC4wNDcgMjE3LjY2NCAxOTcuODU5IDIwOS44NTJMMjQ1Ljg1OSAxNjEuODUyQzI1My42NzIgMTU0LjAzOSAyNjYuMzI4IDE1NC4wMzkgMjc0LjE0MSAxNjEuODUyUzI4MS45NTMgMTgyLjM1MiAyNzQuMTQxIDE5MC4xNjRMMjQwLjI4MSAyMjQuMDA4TDI3NC4xNDEgMjU3Ljg1MlpNNDQyLjE0MSAyMzguMTY0TDM5NC4xNDEgMjg2LjE2NEMzOTAuMjM0IDI5MC4wNyAzODUuMTI1IDI5Mi4wMDggMzgwIDI5Mi4wMDhTMzY5Ljc2NiAyOTAuMDcgMzY1Ljg1OSAyODYuMTY0QzM1OC4wNDcgMjc4LjM1MiAzNTguMDQ3IDI2NS42NjQgMzY1Ljg1OSAyNTcuODUyTDM5OS43MTkgMjI0LjAwOEwzNjUuODU5IDE5MC4xNjRDMzU4LjA0NyAxODIuMzUyIDM1OC4wNDcgMTY5LjY2NCAzNjUuODU5IDE2MS44NTJTMzg2LjMyOCAxNTQuMDM5IDM5NC4xNDEgMTYxLjg1Mkw0NDIuMTQxIDIwOS44NTJDNDQ5Ljk1MyAyMTcuNjY0IDQ0OS45NTMgMjMwLjM1MiA0NDIuMTQxIDIzOC4xNjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LaptopCode(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M128 96H512V352H576V80C576 53.625 554.375 32 528 32H112C85.625 32 64 53.625 64 80V352H128V96ZM624 384H16C7.25 384 0 391.25 0 400V416C0 451.25 28.75 480 64 480H576C611.25 480 640 451.25 640 416V400C640 391.25 632.75 384 624 384Z" />
            <path d="M128 96V352H512V96H128ZM274.141 257.852C281.953 265.664 281.953 278.352 274.141 286.164C270.234 290.07 265.125 292.008 260 292.008S249.766 290.07 245.859 286.164L197.859 238.164C190.047 230.352 190.047 217.664 197.859 209.852L245.859 161.852C253.672 154.039 266.328 154.039 274.141 161.852S281.953 182.352 274.141 190.164L240.281 224.008L274.141 257.852ZM442.141 238.164L394.141 286.164C390.234 290.07 385.125 292.008 380 292.008S369.766 290.07 365.859 286.164C358.047 278.352 358.047 265.664 365.859 257.852L399.719 224.008L365.859 190.164C358.047 182.352 358.047 169.664 365.859 161.852S386.328 154.039 394.141 161.852L442.141 209.852C449.953 217.664 449.953 230.352 442.141 238.164Z" />
        </Icon>
    </>
}