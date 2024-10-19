
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `scanner-gun` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-gun?s=solid scanner-gun}
 * @preview ![scanner-gun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjguMDAxIDQxNS45NTFINDI0LjAxNUM0MTkuNjQgNDE1Ljk1MSA0MTYuMDE2IDQxOS41NzYgNDE2LjAxNiA0MjMuOTVWNDcxLjk0NEM0MTYuMDE2IDQ3Ni4zMTkgNDE5LjY0IDQ3OS45NDMgNDI0LjAxNSA0NzkuOTQzSDU2OC4wMDFDNTcyLjM3NSA0NzkuOTQzIDU3NiA0NzYuMzE5IDU3NiA0NzEuOTQ0VjQyMy45NUM1NzYgNDE5LjU3NiA1NzIuMzc1IDQxNS45NTEgNTY4LjAwMSA0MTUuOTUxWk01NjguMDAxIDI4Ny45NjhINDI0LjAxNUM0MTkuNjQgMjg3Ljk2OCA0MTYuMDE2IDI5MS41OTIgNDE2LjAxNiAyOTUuOTY3VjMxMS45NjVDNDE2LjAxNiAzMTYuMzM5IDQxOS42NCAzMTkuOTY0IDQyNC4wMTUgMzE5Ljk2NEg1NjguMDAxQzU3Mi4zNzUgMzE5Ljk2NCA1NzYgMzE2LjMzOSA1NzYgMzExLjk2NVYyOTUuOTY3QzU3NiAyOTEuNTkyIDU3Mi4zNzUgMjg3Ljk2OCA1NjguMDAxIDI4Ny45NjhaTTU2OC4wMDEgMzUxLjk2SDQyNC4wMTVDNDE5LjY0IDM1MS45NiA0MTYuMDE2IDM1NS41ODQgNDE2LjAxNiAzNTkuOTU5VjM3NS45NTdDNDE2LjAxNiAzODAuMzMxIDQxOS42NCAzODMuOTU2IDQyNC4wMTUgMzgzLjk1Nkg1NjguMDAxQzU3Mi4zNzUgMzgzLjk1NiA1NzYgMzgwLjMzMSA1NzYgMzc1Ljk1N1YzNTkuOTU5QzU3NiAzNTUuNTg0IDU3Mi4zNzUgMzUxLjk2IDU2OC4wMDEgMzUxLjk2Wk01NjguMDAxIDE5MS45OEg0MjQuMDE1QzQxOS42NCAxOTEuOTggNDE2LjAxNiAxOTUuNjA0IDQxNi4wMTYgMTk5Ljk3OVYyNDcuOTczQzQxNi4wMTYgMjUyLjM0NyA0MTkuNjQgMjU1Ljk3MiA0MjQuMDE1IDI1NS45NzJINTY4LjAwMUM1NzIuMzc1IDI1NS45NzIgNTc2IDI1Mi4zNDcgNTc2IDI0Ny45NzNWMTk5Ljk3OUM1NzYgMTk1LjYwNCA1NzIuMzc1IDE5MS45OCA1NjguMDAxIDE5MS45OFpNNTY4LjAwMSAzMkg0MjQuMDE1QzQxOS42NCAzMiA0MTYuMDE2IDM1LjYyNSA0MTYuMDE2IDM5Ljk5OVY4Ny45OTNDNDE2LjAxNiA5Mi4zNjcgNDE5LjY0IDk1Ljk5MiA0MjQuMDE1IDk1Ljk5Mkg1NjguMDAxQzU3Mi4zNzUgOTUuOTkyIDU3NiA5Mi4zNjcgNTc2IDg3Ljk5M1YzOS45OTlDNTc2IDM1LjYyNSA1NzIuMzc1IDMyIDU2OC4wMDEgMzJaTTU2OC4wMDEgMTI3Ljk4OEg0MjQuMDE1QzQxOS42NCAxMjcuOTg4IDQxNi4wMTYgMTMxLjYxMiA0MTYuMDE2IDEzNS45ODdWMTUxLjk4NUM0MTYuMDE2IDE1Ni4zNTkgNDE5LjY0IDE1OS45ODQgNDI0LjAxNSAxNTkuOTg0SDU2OC4wMDFDNTcyLjM3NSAxNTkuOTg0IDU3NiAxNTYuMzU5IDU3NiAxNTEuOTg1VjEzNS45ODdDNTc2IDEzMS42MTIgNTcyLjM3NSAxMjcuOTg4IDU2OC4wMDEgMTI3Ljk4OFpNMzIwLjAyNSAzMi4wNTdIMTEyLjA0NkM1MC4xOTYgMzIuMDU3IDAuMDU3IDgyLjE5NSAwLjA1NyAxNDQuMDQyQzAuMDU3IDE5NC4yNTcgMzMuMzMxIDIzNi4yNTIgNzguODY1IDI1MC40NjFMNi40MzEgMzc1Ljk1N0MtNi44MTggMzk4Ljk1NCAxLjA1NyA0MjguMiAyNC4wNTQgNDQxLjU3M0w3OS40MjQgNDczLjU2OUMxMDIuNDIyIDQ4Ni44MTggMTMxLjc5NCA0NzguOTQzIDE0NS4wNDIgNDU1Ljk0NkwyNjAuNDA4IDI1Ni4wMjhIMzIwLjAyNUMzMzcuNjk3IDI1Ni4wMjggMzUyLjAyMiAyNDEuNzA0IDM1Mi4wMjIgMjI0LjAzMlY2NC4wNTNDMzUyLjAyMiA0Ni4zODEgMzM3LjY5NyAzMi4wNTcgMzIwLjAyNSAzMi4wNTdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ScannerGun(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M568.001 415.951H424.015C419.64 415.951 416.016 419.576 416.016 423.95V471.944C416.016 476.319 419.64 479.943 424.015 479.943H568.001C572.375 479.943 576 476.319 576 471.944V423.95C576 419.576 572.375 415.951 568.001 415.951ZM568.001 287.968H424.015C419.64 287.968 416.016 291.592 416.016 295.967V311.965C416.016 316.339 419.64 319.964 424.015 319.964H568.001C572.375 319.964 576 316.339 576 311.965V295.967C576 291.592 572.375 287.968 568.001 287.968ZM568.001 351.96H424.015C419.64 351.96 416.016 355.584 416.016 359.959V375.957C416.016 380.331 419.64 383.956 424.015 383.956H568.001C572.375 383.956 576 380.331 576 375.957V359.959C576 355.584 572.375 351.96 568.001 351.96ZM568.001 191.98H424.015C419.64 191.98 416.016 195.604 416.016 199.979V247.973C416.016 252.347 419.64 255.972 424.015 255.972H568.001C572.375 255.972 576 252.347 576 247.973V199.979C576 195.604 572.375 191.98 568.001 191.98ZM568.001 32H424.015C419.64 32 416.016 35.625 416.016 39.999V87.993C416.016 92.367 419.64 95.992 424.015 95.992H568.001C572.375 95.992 576 92.367 576 87.993V39.999C576 35.625 572.375 32 568.001 32ZM568.001 127.988H424.015C419.64 127.988 416.016 131.612 416.016 135.987V151.985C416.016 156.359 419.64 159.984 424.015 159.984H568.001C572.375 159.984 576 156.359 576 151.985V135.987C576 131.612 572.375 127.988 568.001 127.988ZM320.025 32.057H112.046C50.196 32.057 0.057 82.195 0.057 144.042C0.057 194.257 33.331 236.252 78.865 250.461L6.431 375.957C-6.818 398.954 1.057 428.2 24.054 441.573L79.424 473.569C102.422 486.818 131.794 478.943 145.042 455.946L260.408 256.028H320.025C337.697 256.028 352.022 241.704 352.022 224.032V64.053C352.022 46.381 337.697 32.057 320.025 32.057Z" />
        </Icon>
    </>
}