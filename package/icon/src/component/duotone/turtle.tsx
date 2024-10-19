
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `turtle` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/turtle?s=duotone turtle}
 * @preview ![turtle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU4NC4yNSAxMzcuMjUxTDUzNS42MjUgMTAyLjUwMUM1MDAuNSA4NS4xMjYgNDU1LjEyNSAxMDQuMTI2IDQ0OC44NzUgMTQyLjc1MUM0NDguMjUgMTQ2LjEyNiA0NDggMTQ5LjUwMSA0NDggMTUzLjAwMVYyMjQuMjUxQzQ0OCAyMzguMTI2IDQ0My4zNzUgMjUxLjM3NiA0MzQuNzUgMjYyLjYyNkM0MjIuMjUgMjc4Ljc1MSA0MDMuNSAyODguMDAxIDM4MyAyODguMDAxSDUwLjYyNUM0MC4zNzUgMjg4LjAwMSAzMiAyOTYuMzc2IDMyIDMwNi42MjZDMzIgMzE0LjYyNiAzNy4xMjUgMzIxLjc1MSA0NC43NSAzMjQuMjUxTDE0MyAzNDYuMzc2TDk4LjEyNSA0MjQuMDAxQzkyIDQzNC42MjYgOTkuNzUgNDQ4LjAwMSAxMTIgNDQ4LjAwMUgxNDlDMTU0Ljc1IDQ0OC4wMDEgMTYwIDQ0NS4wMDEgMTYyLjg3NSA0NDAuMDAxTDIwMy4xMjUgMzcwLjI1MUMyMjkuMTI1IDM3OC43NTEgMjQ4Ljc1IDM4NC4wMDEgMjg4IDM4NC4wMDFDMzI3LjM3NSAzODQuMDAxIDM0Ni44NzUgMzc4Ljc1MSAzNzIuODc1IDM3MC4yNTFMNDEzLjEyNSA0NDAuMDAxQzQxNiA0NDUuMDAxIDQyMS4zNzUgNDQ4LjAwMSA0MjcgNDQ4LjAwMUg0NjRDNDc2LjI1IDQ0OC4wMDEgNDg0IDQzNC42MjYgNDc3Ljg3NSA0MjQuMDAxTDQzMC42MjUgMzQyLjI1MUM0NTEuODc1IDMzMy44NzYgNDcxIDMyMC41MDEgNDg1LjUgMzAxLjc1MUM0OTkuNSAyODMuMzc2IDUwNy44NzUgMjYyLjI1MSA1MTAuNzUgMjQwLjAwMUg1NTEuMzc1QzU4Mi42MjUgMjQwLjAwMSA2MDggMjE0LjYyNiA2MDggMTgzLjM3NkM2MDggMTY1LjAwMSA1OTkuMTI1IDE0Ny44NzYgNTg0LjI1IDEzNy4yNTFaTTUxMiAxNzYuMDAxQzUwMy4xMjUgMTc2LjAwMSA0OTYgMTY4Ljg3NiA0OTYgMTYwLjAwMVM1MDMuMTI1IDE0NC4wMDEgNTEyIDE0NC4wMDFTNTI4IDE1MS4xMjYgNTI4IDE2MC4wMDFTNTIwLjg3NSAxNzYuMDAxIDUxMiAxNzYuMDAxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zODMgMjg4SDk2Qzc4LjMyNyAyODggNjQgMjczLjY3MyA2NCAyNTZWMjI0QzY0IDEzNS42MzUgMTYwIDY0IDI1NiA2NFM0NDggMTM1LjYzNSA0NDggMjI0VjIyNC4yNUM0NDggMjM4LjEyNSA0NDMuMzc1IDI1MS4zNzUgNDM0Ljc1IDI2Mi42MjVDNDIyLjI1IDI3OC43NSA0MDMuNSAyODggMzgzIDI4OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Turtle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M584.25 137.251L535.625 102.501C500.5 85.126 455.125 104.126 448.875 142.751C448.25 146.126 448 149.501 448 153.001V224.251C448 238.126 443.375 251.376 434.75 262.626C422.25 278.751 403.5 288.001 383 288.001H50.625C40.375 288.001 32 296.376 32 306.626C32 314.626 37.125 321.751 44.75 324.251L143 346.376L98.125 424.001C92 434.626 99.75 448.001 112 448.001H149C154.75 448.001 160 445.001 162.875 440.001L203.125 370.251C229.125 378.751 248.75 384.001 288 384.001C327.375 384.001 346.875 378.751 372.875 370.251L413.125 440.001C416 445.001 421.375 448.001 427 448.001H464C476.25 448.001 484 434.626 477.875 424.001L430.625 342.251C451.875 333.876 471 320.501 485.5 301.751C499.5 283.376 507.875 262.251 510.75 240.001H551.375C582.625 240.001 608 214.626 608 183.376C608 165.001 599.125 147.876 584.25 137.251ZM512 176.001C503.125 176.001 496 168.876 496 160.001S503.125 144.001 512 144.001S528 151.126 528 160.001S520.875 176.001 512 176.001Z" />
            <path d="M383 288H96C78.327 288 64 273.673 64 256V224C64 135.635 160 64 256 64S448 135.635 448 224V224.25C448 238.125 443.375 251.375 434.75 262.625C422.25 278.75 403.5 288 383 288Z" />
        </Icon>
    </>
}