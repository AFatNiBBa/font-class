
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `scanner-gun` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-gun?s=regular scanner-gun}
 * @preview ![scanner-gun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjAgNDE1Ljk1MUg0MzIuMDE2QzQyMy4yMTUgNDE1Ljk1MSA0MTYuMDE2IDQyMy4xNSA0MTYuMDE2IDQzMS45NTFWNDYzLjk0M0M0MTYuMDE2IDQ3Mi43NDIgNDIzLjIxNSA0NzkuOTQzIDQzMi4wMTYgNDc5Ljk0M0g1NjBDNTY4LjgwMSA0NzkuOTQzIDU3NiA0NzIuNzQyIDU3NiA0NjMuOTQzVjQzMS45NTFDNTc2IDQyMy4xNSA1NjguODAxIDQxNS45NTEgNTYwIDQxNS45NTFaTTU2MC4wMDIgMjg3Ljk2N0g0MzIuMDE0QzQyMy4yMTUgMjg3Ljk2NyA0MTYuMDE2IDI5NS4xNjYgNDE2LjAxNiAzMDMuOTY1UzQyMy4yMTUgMzE5Ljk2MyA0MzIuMDE0IDMxOS45NjNINTYwLjAwMkM1NjguODAxIDMxOS45NjMgNTc2IDMxMi43NjQgNTc2IDMwMy45NjVTNTY4LjgwMSAyODcuOTY3IDU2MC4wMDIgMjg3Ljk2N1pNNTYwLjAwMiAzNTEuOTU5SDQzMi4wMTRDNDIzLjIxNSAzNTEuOTU5IDQxNi4wMTYgMzU5LjE1OCA0MTYuMDE2IDM2Ny45NTdTNDIzLjIxNSAzODMuOTU1IDQzMi4wMTQgMzgzLjk1NUg1NjAuMDAyQzU2OC44MDEgMzgzLjk1NSA1NzYgMzc2Ljc1NiA1NzYgMzY3Ljk1N1M1NjguODAxIDM1MS45NTkgNTYwLjAwMiAzNTEuOTU5Wk01NjAgMTkxLjk3OUg0MzIuMDE2QzQyMy4yMTUgMTkxLjk3OSA0MTYuMDE2IDE5OS4xOCA0MTYuMDE2IDIwNy45NzlWMjM5Ljk3MUM0MTYuMDE2IDI0OC43NzEgNDIzLjIxNSAyNTUuOTcxIDQzMi4wMTYgMjU1Ljk3MUg1NjBDNTY4LjgwMSAyNTUuOTcxIDU3NiAyNDguNzcxIDU3NiAyMzkuOTcxVjIwNy45NzlDNTc2IDE5OS4xOCA1NjguODAxIDE5MS45NzkgNTYwIDE5MS45NzlaTTU2MCAzMkg0MzIuMDE2QzQyMy4yMTUgMzIgNDE2LjAxNiAzOS4xOTkgNDE2LjAxNiA0OFY3OS45OTJDNDE2LjAxNiA4OC43OTEgNDIzLjIxNSA5NS45OTIgNDMyLjAxNiA5NS45OTJINTYwQzU2OC44MDEgOTUuOTkyIDU3NiA4OC43OTEgNTc2IDc5Ljk5MlY0OEM1NzYgMzkuMTk5IDU2OC44MDEgMzIgNTYwIDMyWk01NjAuMDAyIDEyNy45ODhINDMyLjAxNEM0MjMuMjE1IDEyNy45ODggNDE2LjAxNiAxMzUuMTg2IDQxNi4wMTYgMTQzLjk4NkM0MTYuMDE2IDE1Mi43ODUgNDIzLjIxNSAxNTkuOTgyIDQzMi4wMTQgMTU5Ljk4Mkg1NjAuMDAyQzU2OC44MDEgMTU5Ljk4MiA1NzYgMTUyLjc4NSA1NzYgMTQzLjk4NEM1NzYgMTM1LjE4NiA1NjguODAxIDEyNy45ODggNTYwLjAwMiAxMjcuOTg4Wk0zMjAgMzJIMTEyQzUwLjE0NSAzMiAwIDgyLjE0NSAwIDE0NEMwIDE5NC40MjIgMzMuNTQxIDIzNi41NTcgNzkuMzYzIDI1MC42TDYuNDMyIDM3NS45NTVDLTYuODE4IDM5OC45NTMgMS4wNTcgNDI4LjE5OSAyNC4wNTUgNDQxLjU3Mkw3OS40MjQgNDczLjU2OEM4Ni45OSA0NzcuOTI2IDk1LjI0NiA0ODAgMTAzLjM5MSA0ODBDMTIwLjAwNCA0ODAgMTM2LjE1MiA0NzEuMzc3IDE0NS4wNDMgNDU1Ljk0NUwyNjAuNDA4IDI1Ni4wMjdMMjYwLjQyIDI1NkgzMjBDMzM3LjY3NCAyNTYgMzUyIDI0MS42NzQgMzUyIDIyNFY2NEMzNTIgNDYuMzI2IDMzNy42NzQgMzIgMzIwIDMyWk0xMDMuNDQgNDMyLjAwOEw0Ny45MjIgNDAwLjA5NEwxMzEuNzU0IDI1NkgyMDUuMDA2TDEwMy40NCA0MzIuMDA4Wk0zMDQgMjA4SDExMkM3Ni43MTEgMjA4IDQ4IDE3OS4yODkgNDggMTQ0Uzc2LjcxMSA4MCAxMTIgODBIMzA0VjIwOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ScannerGun(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M560 415.951H432.016C423.215 415.951 416.016 423.15 416.016 431.951V463.943C416.016 472.742 423.215 479.943 432.016 479.943H560C568.801 479.943 576 472.742 576 463.943V431.951C576 423.15 568.801 415.951 560 415.951ZM560.002 287.967H432.014C423.215 287.967 416.016 295.166 416.016 303.965S423.215 319.963 432.014 319.963H560.002C568.801 319.963 576 312.764 576 303.965S568.801 287.967 560.002 287.967ZM560.002 351.959H432.014C423.215 351.959 416.016 359.158 416.016 367.957S423.215 383.955 432.014 383.955H560.002C568.801 383.955 576 376.756 576 367.957S568.801 351.959 560.002 351.959ZM560 191.979H432.016C423.215 191.979 416.016 199.18 416.016 207.979V239.971C416.016 248.771 423.215 255.971 432.016 255.971H560C568.801 255.971 576 248.771 576 239.971V207.979C576 199.18 568.801 191.979 560 191.979ZM560 32H432.016C423.215 32 416.016 39.199 416.016 48V79.992C416.016 88.791 423.215 95.992 432.016 95.992H560C568.801 95.992 576 88.791 576 79.992V48C576 39.199 568.801 32 560 32ZM560.002 127.988H432.014C423.215 127.988 416.016 135.186 416.016 143.986C416.016 152.785 423.215 159.982 432.014 159.982H560.002C568.801 159.982 576 152.785 576 143.984C576 135.186 568.801 127.988 560.002 127.988ZM320 32H112C50.145 32 0 82.145 0 144C0 194.422 33.541 236.557 79.363 250.6L6.432 375.955C-6.818 398.953 1.057 428.199 24.055 441.572L79.424 473.568C86.99 477.926 95.246 480 103.391 480C120.004 480 136.152 471.377 145.043 455.945L260.408 256.027L260.42 256H320C337.674 256 352 241.674 352 224V64C352 46.326 337.674 32 320 32ZM103.44 432.008L47.922 400.094L131.754 256H205.006L103.44 432.008ZM304 208H112C76.711 208 48 179.289 48 144S76.711 80 112 80H304V208Z" />
        </Icon>
    </>
}