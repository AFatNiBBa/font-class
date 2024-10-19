
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `maximize` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/maximize?s=thin maximize}
 * @preview ![maximize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTQuODkxIDEzNi40MjVMNDAyLjUgMTgzLjk5NkM0MjAuMzkxIDIwMS44NjcgNDQ4IDE4Ny4yNjcgNDQ4IDE2NS4xNjZWNTEuOTc2QzQ0OCA0MC45NDUgNDM5LjA1MSAzMi4wMDIgNDI4LjAxIDMyLjAwMkgzMTQuNzMxQzI5Mi4xNDUgMzIuMDAyIDI3OC40ODEgNjAuMDc1IDI5NS44ODUgNzcuNDY2TDM0My41NzUgMTI1LjExN0wyMjQuMDAxIDI0NC42ODhMMTA0LjQyMSAxMjUuMTExTDE1MS45OTkgNzcuNDk5QzE2OS44NjggNTkuNjA5IDE1NS4yNjkgMzIgMTMzLjE2OSAzMkgxOS45NzVDOC45NDMgMzIgMCA0MC45NDkgMCA1MS45OVYxNjUuMjY2QzAgMTg3Ljg1MSAyOC4wNzQgMjAxLjUxMyA0NS40NjUgMTg0LjExMUw5My4xMTMgMTM2LjQyN0wyMTIuNjg5IDI1Nkw5My4xMTEgMzc1LjU3NUw0NS41IDMyOC4wMDJDMjcuNjA5IDMxMC4xMzEgMCAzMjQuNzMzIDAgMzQ2LjgzMlY0NjAuMDIyQzAgNDcxLjA1MyA4Ljk0OSA0NzkuOTk4IDE5Ljk5IDQ3OS45OThIMTMzLjI2OUMxNTUuODU1IDQ3OS45OTggMTY5LjUxOSA0NTEuOTIzIDE1Mi4xMTUgNDM0LjUzNEwxMDQuNDI3IDM4Ni44ODNMMjI0LjAwMSAyNjcuMzEyTDM0My41NzkgMzg2Ljg4N0wyOTYuMDAxIDQzNC41MDFDMjc4LjEzMiA0NTIuMzkxIDI5Mi43MzEgNDgwIDMxNC44MzEgNDgwSDQyOC4wMjVDNDM5LjA1NyA0ODAgNDQ4IDQ3MS4wNTEgNDQ4IDQ2MC4wMVYzNDYuNzMyQzQ0OCAzMjQuMTQ5IDQxOS45MjYgMzEwLjQ4NSA0MDIuNTM1IDMyNy44ODlMMzU0Ljg4NyAzNzUuNTcxTDIzNS4zMTMgMjU2TDM1NC44OTEgMTM2LjQyNVpNMzE0LjczMSA0Ny45ODJINDI4LjAxQzQzMC4yMTMgNDcuOTgyIDQzMi4wMDggNDkuNzczIDQzMi4wMDggNTEuOTc2VjE2NS4xNjZDNDMyLjAwOCAxNzQuMTY4IDQyMC44MDMgMTc5LjY4NiA0MTMuODA5IDE3Mi42OTdMMzA3LjE5NCA2Ni4xNjVDMjk5Ljk5OSA1OC45ODIgMzA1Ljk0MiA0Ny45ODIgMzE0LjczMSA0Ny45ODJaTTM0LjE2NCAxNzIuODAxQzI2Ljk4IDE3OS45OTggMTUuOTggMTc0LjA1NSAxNS45OCAxNjUuMjY2VjUxLjk5QzE1Ljk4IDQ5Ljc4NSAxNy43NzMgNDcuOTkyIDE5Ljk3NSA0Ny45OTJIMTMzLjE2OUMxNDIuMTY5IDQ3Ljk5MiAxNDcuNjg3IDU5LjE5NSAxNDAuNjk5IDY2LjE4OUwzNC4xNjQgMTcyLjgwMVpNMTMzLjI2OSA0NjQuMDE4SDE5Ljk5QzE3Ljc4NyA0NjQuMDE4IDE1Ljk5MiA0NjIuMjI1IDE1Ljk5MiA0NjAuMDIyVjM0Ni44MzJDMTUuOTkyIDMzNy44MzIgMjcuMTk3IDMzMi4zMTIgMzQuMTkxIDMzOS4zMDNMMTQwLjgwNiA0NDUuODMzQzE0OC4wMDEgNDUzLjAxOCAxNDIuMDU4IDQ2NC4wMTggMTMzLjI2OSA0NjQuMDE4Wk00MTMuODM2IDMzOS4xOTdDNDIxLjAyIDMzMi4wMDIgNDMyLjAyIDMzNy45NDUgNDMyLjAyIDM0Ni43MzJWNDYwLjAxQzQzMi4wMiA0NjIuMjEzIDQzMC4yMjcgNDY0LjAwOCA0MjguMDI1IDQ2NC4wMDhIMzE0LjgzMUMzMDUuODMxIDQ2NC4wMDggMzAwLjMxMyA0NTIuODAzIDMwNy4zMDEgNDQ1LjgwOUw0MTMuODM2IDMzOS4xOTdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Maximize(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M354.891 136.425L402.5 183.996C420.391 201.867 448 187.267 448 165.166V51.976C448 40.945 439.051 32.002 428.01 32.002H314.731C292.145 32.002 278.481 60.075 295.885 77.466L343.575 125.117L224.001 244.688L104.421 125.111L151.999 77.499C169.868 59.609 155.269 32 133.169 32H19.975C8.943 32 0 40.949 0 51.99V165.266C0 187.851 28.074 201.513 45.465 184.111L93.113 136.427L212.689 256L93.111 375.575L45.5 328.002C27.609 310.131 0 324.733 0 346.832V460.022C0 471.053 8.949 479.998 19.99 479.998H133.269C155.855 479.998 169.519 451.923 152.115 434.534L104.427 386.883L224.001 267.312L343.579 386.887L296.001 434.501C278.132 452.391 292.731 480 314.831 480H428.025C439.057 480 448 471.051 448 460.01V346.732C448 324.149 419.926 310.485 402.535 327.889L354.887 375.571L235.313 256L354.891 136.425ZM314.731 47.982H428.01C430.213 47.982 432.008 49.773 432.008 51.976V165.166C432.008 174.168 420.803 179.686 413.809 172.697L307.194 66.165C299.999 58.982 305.942 47.982 314.731 47.982ZM34.164 172.801C26.98 179.998 15.98 174.055 15.98 165.266V51.99C15.98 49.785 17.773 47.992 19.975 47.992H133.169C142.169 47.992 147.687 59.195 140.699 66.189L34.164 172.801ZM133.269 464.018H19.99C17.787 464.018 15.992 462.225 15.992 460.022V346.832C15.992 337.832 27.197 332.312 34.191 339.303L140.806 445.833C148.001 453.018 142.058 464.018 133.269 464.018ZM413.836 339.197C421.02 332.002 432.02 337.945 432.02 346.732V460.01C432.02 462.213 430.227 464.008 428.025 464.008H314.831C305.831 464.008 300.313 452.803 307.301 445.809L413.836 339.197Z" />
        </Icon>
    </>
}